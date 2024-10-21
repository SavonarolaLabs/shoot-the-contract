import antlr4 from "antlr4";
import RalphLexer from "./parser/RalphLexer.js";
import RalphParser from "./parser/RalphParser.js";
import planck from "planck";

/*
// Sample input code
const input = `
Contract Foo(a: U256, mut b: I256, c: ByteVec, mut d: Bool) {
  pub fn update(value: I256) -> () {
    b = value
  }
}
`;

// Set up the lexer and parser
const chars = new antlr4.InputStream(input);
const lexer = new RalphLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new RalphParser(tokens);
parser.buildParseTrees = true;

// Parse the input
const tree = parser.sourceFile(); // Use the actual start rule of your grammar

// Output the parse tree
console.log(tree.toStringTree(parser.ruleNames));
*/

// Adjustable parameters (magic numbers)
const WORLD_WIDTH = 800; // Canvas width
const WORLD_HEIGHT = 600; // Canvas height
const TIME_STEP = 1 / 60; // Physics time step

// Hydra parameters
const HYDRA_RADIUS = 80; // Radius of the hydra's central body
const HYDRA_HEAD_RADIUS = 20; // Radius of each hydra head
const HYDRA_HP = 300; // Health points of each hydra head
const HYDRA_ATTACK_INTERVAL = 2; // Time between hydra attacks (seconds)
const HYDRA_PROJECTILE_SPEED = 10; // Speed of hydra projectiles
const HYDRA_PROJECTILE_RADIUS = 5; // Radius of hydra projectiles

// Player parameters
const PLAYER_RADIUS = 10; // Radius of the player
const PLAYER_HP = 100; // Health points of the player
const PLAYER_MOVE_FORCE = 500; // Movement force applied to the player
const PLAYER_PROJECTILE_SPEED = 15; // Speed of player projectiles
const PLAYER_PROJECTILE_RADIUS = 5; // Radius of player projectiles

// Game parameters
const MAX_PROJECTILES = 100; // Maximum number of projectiles in the game
const LAVA_RADIUS = HYDRA_RADIUS + 150; // Radius of the lava around the hydra

// Import the sample contract code
const input = `
Contract Foo(a: U256, mut b: I256, c: ByteVec, mut d: Bool) {
  pub fn update(value: I256) -> () {
    b = value
  }

  pub fn attack(target: Address) -> () {
    // Attack logic
  }

  pub fn defend() -> () {
    // Defense logic
  }
}
`;

// Set up the lexer and parser
const chars = new antlr4.InputStream(input);
const lexer = new RalphLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new RalphParser(tokens);
parser.buildParseTrees = true;

// Parse the input
const tree = parser.sourceFile(); // Use the actual start rule of your grammar

// Function to count the number of function declarations and extract names
function getFunctionNames(tree) {
	const names = [];

	function visit(node) {
		if (node.getChildCount && node.getChildCount() > 0) {
			for (let i = 0; i < node.getChildCount(); i++) {
				const child = node.getChild(i);

				if (child.getText && child.getText() === "fn") {
					// The function name is the next sibling
					const nameNode = node.getChild(i + 1);
					if (nameNode) {
						names.push(nameNode.getText());
					}
				}
				visit(child);
			}
		}
	}

	visit(tree);
	return names;
}

const functionNames = getFunctionNames(tree);
const numberOfHeads = functionNames.length || 1; // At least one head

// Create the physics world
const world = planck.World({
	gravity: planck.Vec2(0, 0), // No gravity for top-down view
});

// Initialize game objects
const hydraHeads = [];
const projectiles = [];
const playerProjectiles = [];

// Create the hydra's central body
const hydraBody = world.createBody({
	type: "static",
	position: planck.Vec2(0, 0),
});

hydraBody.createFixture(planck.Circle(HYDRA_RADIUS), {
	isSensor: true,
});

// Create hydra heads
for (let i = 0; i < numberOfHeads; i++) {
	const angle = (2 * Math.PI * i) / numberOfHeads;
	const distance = HYDRA_RADIUS + 50; // Distance from the center
	const headPosition = planck.Vec2(
		distance * Math.cos(angle),
		distance * Math.sin(angle)
	);

	const headBody = world.createBody({
		type: "dynamic",
		position: headPosition,
		fixedRotation: true,
	});

	headBody.createFixture(planck.Circle(HYDRA_HEAD_RADIUS), {
		density: 1.0,
		friction: 0.0,
		filterCategoryBits: 0x0002, // Collision category
		filterMaskBits: 0x0001, // Collides with player
	});

	// Add properties to the head
	headBody.hp = HYDRA_HP;
	headBody.functionName = functionNames[i] || "Unknown";

	hydraHeads.push(headBody);
}

// Create the player
const playerBody = world.createBody({
	type: "dynamic",
	position: planck.Vec2(0, -LAVA_RADIUS - 100),
	fixedRotation: true,
});

playerBody.createFixture(planck.Circle(PLAYER_RADIUS), {
	density: 1.0,
	friction: 0.0,
	filterCategoryBits: 0x0001, // Collision category
	filterMaskBits: 0x0002 | 0x0004, // Collides with hydra heads and projectiles
});

// Add properties to the player
playerBody.hp = PLAYER_HP;

// Set up the canvas
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

// Adjust canvas size
canvas.width = WORLD_WIDTH;
canvas.height = WORLD_HEIGHT;

// Handle player input
const keys = {};

window.addEventListener("keydown", (e) => {
	keys[e.code] = true;
});

window.addEventListener("keyup", (e) => {
	keys[e.code] = false;
});

// Handle mouse input for shooting
canvas.addEventListener("mousedown", (e) => {
	const rect = canvas.getBoundingClientRect();
	const mouseX = e.clientX - rect.left - WORLD_WIDTH / 2;
	const mouseY = WORLD_HEIGHT / 2 - (e.clientY - rect.top);
	playerShoot(planck.Vec2(mouseX, mouseY));
});

// Player movement
function handlePlayerMovement() {
	const moveForce = planck.Vec2(0, 0);

	if (keys["ArrowUp"] || keys["KeyW"]) {
		moveForce.y += PLAYER_MOVE_FORCE;
	}
	if (keys["ArrowDown"] || keys["KeyS"]) {
		moveForce.y -= PLAYER_MOVE_FORCE;
	}
	if (keys["ArrowLeft"] || keys["KeyA"]) {
		moveForce.x -= PLAYER_MOVE_FORCE;
	}
	if (keys["ArrowRight"] || keys["KeyD"]) {
		moveForce.x += PLAYER_MOVE_FORCE;
	}

	playerBody.applyForceToCenter(moveForce, true);
}

// Player shooting
function playerShoot(targetPosition) {
	const playerPosition = playerBody.getPosition();
	const direction = targetPosition.clone().sub(playerPosition);
	direction.normalize();
	direction.mul(PLAYER_PROJECTILE_SPEED);

	const projectile = world.createBody({
		type: "dynamic",
		position: playerPosition,
		bullet: true,
		fixedRotation: true,
	});
	projectile.setLinearVelocity(direction);

	projectile.createFixture(planck.Circle(PLAYER_PROJECTILE_RADIUS), {
		density: 1.0,
		friction: 0.0,
		filterCategoryBits: 0x0004, // Collision category
		filterMaskBits: 0x0002, // Collides with hydra heads
	});

	projectile.setLinearVelocity(direction.mul(PLAYER_PROJECTILE_SPEED));

	// Store projectile
	playerProjectiles.push(projectile);

	// Limit the number of projectiles
	if (playerProjectiles.length > MAX_PROJECTILES) {
		const oldProjectile = playerProjectiles.shift();
		world.destroyBody(oldProjectile);
	}
}

// Hydra attacks
let attackTimer = 0;

function hydraAttack() {
	hydraHeads.forEach((head) => {
		const headPosition = head.getPosition();
		const playerPosition = playerBody.getPosition();
		const distance = playerPosition.clone().sub(headPosition).length();

		// Simple AI: Shoot at the player if in range
		if (distance < LAVA_RADIUS + 300) {
			// Create a projectile
			const projectile = world.createBody({
				type: "dynamic",
				position: headPosition,
				bullet: true,
				fixedRotation: true,
			});

			projectile.createFixture(planck.Circle(HYDRA_PROJECTILE_RADIUS), {
				density: 1.0,
				friction: 0.0,
				filterCategoryBits: 0x0004, // Collision category
				filterMaskBits: 0x0001, // Collides with player
			});

			// Calculate direction towards the player
			const direction = playerPosition.clone().sub(headPosition);
			direction.normalize();
			direction.mul(HYDRA_PROJECTILE_SPEED);
			projectile.setLinearVelocity(direction);

			// Store projectiles
			projectiles.push(projectile);

			// Limit the number of projectiles
			if (projectiles.length > MAX_PROJECTILES) {
				const oldProjectile = projectiles.shift();
				world.destroyBody(oldProjectile);
			}
		}
	});
}

// Collision handling
world.on("begin-contact", (contact) => {
	const fixtureA = contact.getFixtureA();
	const fixtureB = contact.getFixtureB();
	const bodyA = fixtureA.getBody();
	const bodyB = fixtureB.getBody();

	// Check if hydra projectile hits the player
	if (projectiles.includes(bodyA) && bodyB === playerBody) {
		handlePlayerHit();
		destroyProjectile(bodyA, projectiles);
	} else if (projectiles.includes(bodyB) && bodyA === playerBody) {
		handlePlayerHit();
		destroyProjectile(bodyB, projectiles);
	}

	// Check if player projectile hits hydra head
	hydraHeads.forEach((head) => {
		if (playerProjectiles.includes(bodyA) && bodyB === head) {
			handleHeadHit(head);
			destroyProjectile(bodyA, playerProjectiles);
		} else if (playerProjectiles.includes(bodyB) && bodyA === head) {
			handleHeadHit(head);
			destroyProjectile(bodyB, playerProjectiles);
		}
	});
});

function handlePlayerHit() {
	playerBody.hp -= 10; // Decrease player HP
	if (playerBody.hp <= 0) {
		alert("Game Over!");
		resetGame();
	}
}

function handleHeadHit(head) {
	head.hp -= 50; // Decrease head HP
	if (head.hp <= 0) {
		world.destroyBody(head);
		hydraHeads.splice(hydraHeads.indexOf(head), 1);

		if (hydraHeads.length === 0) {
			alert("You Win!");
			resetGame();
		}
	}
}

function destroyProjectile(projectile, array) {
	world.destroyBody(projectile);
	array.splice(array.indexOf(projectile), 1);
}

function resetGame() {
	// Reload the page or reset the game state
	window.location.reload();
}

// Start the game loop
requestAnimationFrame(gameLoop);

// Rendering
function render() {
	context.clearRect(0, 0, WORLD_WIDTH, WORLD_HEIGHT);

	// Draw the lava
	drawCircle(planck.Vec2(0, 0), LAVA_RADIUS, "orange", null, 0.2);

	// Draw the hydra's central body
	drawCircle(hydraBody.getPosition(), HYDRA_RADIUS, "red");

	// Draw hydra heads
	hydraHeads.forEach((head) => {
		drawCircle(
			head.getPosition(),
			HYDRA_HEAD_RADIUS,
			"darkred",
			head.functionName
		);
	});

	// Draw hydra projectiles
	projectiles.forEach((projectile) => {
		drawCircle(projectile.getPosition(), HYDRA_PROJECTILE_RADIUS, "purple");
	});

	// Draw player projectiles
	playerProjectiles.forEach((projectile) => {
		drawCircle(projectile.getPosition(), PLAYER_PROJECTILE_RADIUS, "green");
	});

	// Draw the player
	drawCircle(playerBody.getPosition(), PLAYER_RADIUS, "blue");

	// Draw UI
	drawUI();
}

// Helper function to draw a circle
function drawCircle(position, radius, color, label = null, alpha = 1.0) {
	const x = position.x + WORLD_WIDTH / 2;
	const y = WORLD_HEIGHT / 2 - position.y;

	context.save();
	context.globalAlpha = alpha;
	context.beginPath();
	context.arc(x, y, radius, 0, 2 * Math.PI);
	context.fillStyle = color;
	context.fill();
	context.restore();

	if (label) {
		context.fillStyle = "white";
		context.font = "12px Arial";
		context.textAlign = "center";
		context.fillText(label, x, y + 4);
	}
}

// Draw UI elements
function drawUI() {
	// Draw player HP
	context.fillStyle = "black";
	context.font = "16px Arial";
	context.textAlign = "left";
	context.fillText(`Player HP: ${playerBody.hp}`, 10, 20);

	// Draw hydra heads remaining
	context.fillText(`Hydra Heads Remaining: ${hydraHeads.length}`, 10, 40);
}

// Prevent the player from entering the lava
world.on("pre-solve", (contact) => {
	const fixtureA = contact.getFixtureA();
	const fixtureB = contact.getFixtureB();
	const bodyA = fixtureA.getBody();
	const bodyB = fixtureB.getBody();

	// Check if the player is in contact with the lava (hydraBody)
	if (
		(bodyA === playerBody && bodyB === hydraBody) ||
		(bodyB === playerBody && bodyA === hydraBody)
	) {
		handleLavaContact();
	}
});

function handleLavaContact() {
	playerBody.hp -= 1; // Damage over time
	if (playerBody.hp <= 0) {
		alert("Game Over! You fell into the lava.");
		resetGame();
	}
}

// Keep the player within the bounds
function keepPlayerInBounds() {
	const position = playerBody.getPosition();
	const distanceFromCenter = position.length();

	if (distanceFromCenter > LAVA_RADIUS + 200) {
		const direction = position.clone();
		direction.neg();
		direction.normalize();
		direction.mul(PLAYER_MOVE_FORCE * 2);
		playerBody.applyForceToCenter(direction, true);
	}
}

// Update the game loop to include bounds checking
function gameLoop() {
	// Handle player movement
	handlePlayerMovement();

	// Keep player within bounds
	keepPlayerInBounds();

	// Hydra attacks
	attackTimer += TIME_STEP;
	if (attackTimer >= HYDRA_ATTACK_INTERVAL) {
		hydraAttack();
		attackTimer = 0;
	}

	// Step the physics world
	world.step(TIME_STEP);

	// Render the game
	render();

	// Continue the game loop
	requestAnimationFrame(gameLoop);
}

// Add the game canvas to the HTML if not present
if (!canvas) {
	const gameCanvas = document.createElement("canvas");
	gameCanvas.id = "gameCanvas";
	gameCanvas.width = WORLD_WIDTH;
	gameCanvas.height = WORLD_HEIGHT;
	document.body.appendChild(gameCanvas);
}
