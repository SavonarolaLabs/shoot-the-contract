import antlr4 from "antlr4";
import RalphLexer from "./parser/RalphLexer.js";
import RalphParser from "./parser/RalphParser.js";
import * as d3 from "d3";

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

// Convert ANTLR parse tree to D3-friendly tree structure
function buildTree(node, parserRuleNames) {
	if (!node.children) return { name: node.getText() };
	const ruleName = parserRuleNames[node.ruleIndex];
	return {
		name: ruleName,
		children: node.children.map((child) =>
			buildTree(child, parserRuleNames)
		),
	};
}

const astTreeData = buildTree(tree, parser.ruleNames);

// Set up the D3 visualization
const svg = d3
	.select("#app")
	.append("svg")
	.attr("width", "100%")
	.attr("height", "100%")
	.call(
		d3.zoom().on("zoom", (event) => {
			svg.attr("transform", event.transform);
		})
	)
	.append("g");

const treemap = d3.tree().size([window.innerHeight, window.innerWidth]);

const root = d3.hierarchy(astTreeData, (d) => d.children);
root.x0 = window.innerHeight / 2;
root.y0 = 0;

const update = (source) => {
	const treeData = treemap(root);
	const nodes = treeData.descendants();
	const links = treeData.descendants().slice(1);

	nodes.forEach((d) => (d.y = d.depth * 180));

	const node = svg
		.selectAll("g.node")
		.data(nodes, (d) => d.id || (d.id = ++i));

	const nodeEnter = node
		.enter()
		.append("g")
		.attr("class", "node")
		.attr("transform", (d) => `translate(${source.y0},${source.x0})`);

	nodeEnter
		.append("circle")
		.attr("class", "node")
		.attr("r", 1e-6)
		.style("fill", (d) => (d._children ? "lightsteelblue" : "#fff"));

	nodeEnter
		.append("text")
		.attr("dy", ".35em")
		.attr("x", (d) => (d.children || d._children ? -13 : 13))
		.attr("text-anchor", (d) =>
			d.children || d._children ? "end" : "start"
		)
		.text((d) => d.data.name);

	const nodeUpdate = nodeEnter.merge(node);
	nodeUpdate
		.transition()
		.duration(200)
		.attr("transform", (d) => `translate(${d.y},${d.x})`);

	nodeUpdate
		.select("circle.node")
		.attr("r", 10)
		.style("fill", (d) => (d._children ? "lightsteelblue" : "#fff"))
		.attr("cursor", "pointer");

	const nodeExit = node
		.exit()
		.transition()
		.duration(200)
		.attr("transform", (d) => `translate(${source.y},${source.x})`)
		.remove();

	nodeExit.select("circle").attr("r", 1e-6);
	nodeExit.select("text").style("fill-opacity", 1e-6);

	const link = svg.selectAll("path.link").data(links, (d) => d.id);

	const linkEnter = link
		.enter()
		.insert("path", "g")
		.attr("class", "link")
		.attr("d", (d) => {
			const o = { x: source.x0, y: source.y0 };
			return diagonal(o, o);
		});

	const linkUpdate = linkEnter.merge(link);
	linkUpdate
		.transition()
		.duration(200)
		.attr("d", (d) => diagonal(d, d.parent));

	const linkExit = link
		.exit()
		.transition()
		.duration(200)
		.attr("d", (d) => {
			const o = { x: source.x, y: source.y };
			return diagonal(o, o);
		})
		.remove();

	nodes.forEach((d) => {
		d.x0 = d.x;
		d.y0 = d.y;
	});

	function diagonal(s, d) {
		return `M ${s.y} ${s.x} C ${(s.y + d.y) / 2} ${s.x}, ${
			(s.y + d.y) / 2
		} ${d.x}, ${d.y} ${d.x}`;
	}
};

let i = 0;
update(root);
