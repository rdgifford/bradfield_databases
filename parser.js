var antlr4 = require('antlr4');
var SQLLexer = require('./SQLLexer').SQLLexer;
var SQLParser = require('./SQLParser').SQLParser;
//var MyGrammarListener = require('./HelloListener').HelloListener;

var input = `SELECT * FROM "employees";`
var chars = new antlr4.InputStream(input);
var lexer = new SQLLexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new SQLParser(tokens);
parser.buildParseTrees = true;
var tree = parser.parse();

console.log('tree', tree.toStringTree())

class Visitor {
  visitChildren(ctx) {
    if (!ctx) {
      return;
    }

    if (ctx.children) {
      return ctx.children.map(child => {
        if (child.children && child.children.length != 0) {
          return child.accept(this);
        } else {
          return child.getText();
        }
      });
    }
  }
}
