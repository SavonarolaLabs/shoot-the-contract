import antlr4 from "antlr4";
import SampleLexer from "./parser/grammar/SampleLexer.js";
import SampleParser from "./parser/grammar/SampleParser.js";

// Sample input
const input = "a = 1 + 2\nb = a * 3\n";

// Create the lexer and parser
const chars = new antlr4.InputStream(input);
const lexer = new SampleLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new SampleParser(tokens);
parser.buildParseTrees = true;

// Parse the input
const tree = parser.prog();

// Print the parse tree (AST)
console.log(tree.toStringTree(parser.ruleNames));
