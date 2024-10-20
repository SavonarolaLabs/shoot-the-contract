import antlr4 from "antlr4";
import RalphLexer from "./parser/RalphLexer.js";
import RalphParser from "./parser/RalphParser.js";

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
