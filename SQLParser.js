// Generated from SQL.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SQLListener = require('./SQLListener').SQLListener;
var grammarFileName = "SQL.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003/\u00e6\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0007\u0003/\n\u0003\f\u0003\u000e\u00032\u000b\u0003\u0003\u0004",
    "\u0003\u0004\u0005\u00046\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0005\u0006C\n\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0007\u0006H\n\u0006\f\u0006\u000e\u0006K\u000b\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006Q\n\u0006\f\u0006",
    "\u000e\u0006T\u000b\u0006\u0005\u0006V\n\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006Z\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0007\u0006a\n\u0006\f\u0006\u000e\u0006d\u000b\u0006\u0003",
    "\u0006\u0003\u0006\u0005\u0006h\n\u0006\u0005\u0006j\n\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006q\n\u0006",
    "\f\u0006\u000e\u0006t\u000b\u0006\u0005\u0006v\n\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0005\u0006|\n\u0006\u0005\u0006~\n\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0005\u0007\u0087\n\u0007\u0003\u0007\u0005\u0007\u008a",
    "\n\u0007\u0005\u0007\u008c\n\u0007\u0003\b\u0003\b\u0003\b\u0005\b\u0091",
    "\n\b\u0003\b\u0003\b\u0005\b\u0095\n\b\u0003\b\u0005\b\u0098\n\b\u0003",
    "\b\u0005\b\u009b\n\b\u0003\t\u0003\t\u0005\t\u009f\n\t\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00b4\n",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005",
    "\u0011\u00bb\n\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011",
    "\u00c0\n\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00c9\n\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0007\u0011",
    "\u00dd\n\u0011\f\u0011\u000e\u0011\u00e0\u000b\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0002\u0003 \u0014\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e",
    " \"$\u0002\u000b\u0004\u0002\u0006\u0006##\u0003\u0002%&\u0004\u0002",
    "\u0016\u0016//\u0004\u0002\u0007\u0007\n\u000b\u0004\u0002\t\t\f\f\u0003",
    "\u0002\r\u0010\u0003\u0002\u0011\u0014\u0004\u0002\u0015\u0015//\u0003",
    "\u0002\u0017-\u0002\u00f8\u0002&\u0003\u0002\u0002\u0002\u0004)\u0003",
    "\u0002\u0002\u0002\u00065\u0003\u0002\u0002\u0002\b7\u0003\u0002\u0002",
    "\u0002\n@\u0003\u0002\u0002\u0002\f\u008b\u0003\u0002\u0002\u0002\u000e",
    "\u009a\u0003\u0002\u0002\u0002\u0010\u009c\u0003\u0002\u0002\u0002\u0012",
    "\u00a0\u0003\u0002\u0002\u0002\u0014\u00a2\u0003\u0002\u0002\u0002\u0016",
    "\u00a4\u0003\u0002\u0002\u0002\u0018\u00a6\u0003\u0002\u0002\u0002\u001a",
    "\u00a8\u0003\u0002\u0002\u0002\u001c\u00aa\u0003\u0002\u0002\u0002\u001e",
    "\u00b3\u0003\u0002\u0002\u0002 \u00c8\u0003\u0002\u0002\u0002\"\u00e1",
    "\u0003\u0002\u0002\u0002$\u00e3\u0003\u0002\u0002\u0002&\'\u0005\u0004",
    "\u0003\u0002\'(\u0007\u0002\u0002\u0003(\u0003\u0003\u0002\u0002\u0002",
    ")*\u0005\u0006\u0004\u0002*0\u0007\u0003\u0002\u0002+,\u0005\u0006\u0004",
    "\u0002,-\u0007\u0003\u0002\u0002-/\u0003\u0002\u0002\u0002.+\u0003\u0002",
    "\u0002\u0002/2\u0003\u0002\u0002\u00020.\u0003\u0002\u0002\u000201\u0003",
    "\u0002\u0002\u00021\u0005\u0003\u0002\u0002\u000220\u0003\u0002\u0002",
    "\u000236\u0005\b\u0005\u000246\u0005\n\u0006\u000253\u0003\u0002\u0002",
    "\u000254\u0003\u0002\u0002\u00026\u0007\u0003\u0002\u0002\u000278\u0007",
    "\u0017\u0002\u000289\u0007 \u0002\u00029:\u0005\u0016\f\u0002:;\u0007",
    "\u0018\u0002\u0002;<\u0005\u000e\b\u0002<=\u0007\u0004\u0002\u0002=",
    ">\u0005\u0018\r\u0002>?\u0007\u0005\u0002\u0002?\t\u0003\u0002\u0002",
    "\u0002@B\u0007\u0019\u0002\u0002AC\u0007\u001a\u0002\u0002BA\u0003\u0002",
    "\u0002\u0002BC\u0003\u0002\u0002\u0002CD\u0003\u0002\u0002\u0002DI\u0005",
    "\f\u0007\u0002EF\u0007\u0006\u0002\u0002FH\u0005\f\u0007\u0002GE\u0003",
    "\u0002\u0002\u0002HK\u0003\u0002\u0002\u0002IG\u0003\u0002\u0002\u0002",
    "IJ\u0003\u0002\u0002\u0002JU\u0003\u0002\u0002\u0002KI\u0003\u0002\u0002",
    "\u0002LM\u0007\u001b\u0002\u0002MR\u0005\u000e\b\u0002NO\u0007\u0006",
    "\u0002\u0002OQ\u0005\u000e\b\u0002PN\u0003\u0002\u0002\u0002QT\u0003",
    "\u0002\u0002\u0002RP\u0003\u0002\u0002\u0002RS\u0003\u0002\u0002\u0002",
    "SV\u0003\u0002\u0002\u0002TR\u0003\u0002\u0002\u0002UL\u0003\u0002\u0002",
    "\u0002UV\u0003\u0002\u0002\u0002VY\u0003\u0002\u0002\u0002WX\u0007\u001c",
    "\u0002\u0002XZ\u0005 \u0011\u0002YW\u0003\u0002\u0002\u0002YZ\u0003",
    "\u0002\u0002\u0002Zi\u0003\u0002\u0002\u0002[\\\u0007\u001d\u0002\u0002",
    "\\]\u0007\u001e\u0002\u0002]b\u0005 \u0011\u0002^_\u0007\u0006\u0002",
    "\u0002_a\u0005 \u0011\u0002`^\u0003\u0002\u0002\u0002ad\u0003\u0002",
    "\u0002\u0002b`\u0003\u0002\u0002\u0002bc\u0003\u0002\u0002\u0002cg\u0003",
    "\u0002\u0002\u0002db\u0003\u0002\u0002\u0002ef\u0007\u001f\u0002\u0002",
    "fh\u0005 \u0011\u0002ge\u0003\u0002\u0002\u0002gh\u0003\u0002\u0002",
    "\u0002hj\u0003\u0002\u0002\u0002i[\u0003\u0002\u0002\u0002ij\u0003\u0002",
    "\u0002\u0002ju\u0003\u0002\u0002\u0002kl\u0007!\u0002\u0002lm\u0007",
    "\u001e\u0002\u0002mr\u0005\u0010\t\u0002no\u0007\u0006\u0002\u0002o",
    "q\u0005\u0010\t\u0002pn\u0003\u0002\u0002\u0002qt\u0003\u0002\u0002",
    "\u0002rp\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002sv\u0003\u0002",
    "\u0002\u0002tr\u0003\u0002\u0002\u0002uk\u0003\u0002\u0002\u0002uv\u0003",
    "\u0002\u0002\u0002v}\u0003\u0002\u0002\u0002wx\u0007\"\u0002\u0002x",
    "{\u0005 \u0011\u0002yz\t\u0002\u0002\u0002z|\u0005 \u0011\u0002{y\u0003",
    "\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|~\u0003\u0002\u0002\u0002",
    "}w\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002~\u000b\u0003\u0002",
    "\u0002\u0002\u007f\u008c\u0007\u0007\u0002\u0002\u0080\u0081\u0005\u000e",
    "\b\u0002\u0081\u0082\u0007\b\u0002\u0002\u0082\u0083\u0007\u0007\u0002",
    "\u0002\u0083\u008c\u0003\u0002\u0002\u0002\u0084\u0089\u0005 \u0011",
    "\u0002\u0085\u0087\u0007$\u0002\u0002\u0086\u0085\u0003\u0002\u0002",
    "\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u0088\u0003\u0002\u0002",
    "\u0002\u0088\u008a\u0005\u0012\n\u0002\u0089\u0086\u0003\u0002\u0002",
    "\u0002\u0089\u008a\u0003\u0002\u0002\u0002\u008a\u008c\u0003\u0002\u0002",
    "\u0002\u008b\u007f\u0003\u0002\u0002\u0002\u008b\u0080\u0003\u0002\u0002",
    "\u0002\u008b\u0084\u0003\u0002\u0002\u0002\u008c\r\u0003\u0002\u0002",
    "\u0002\u008d\u008e\u0005\u0014\u000b\u0002\u008e\u008f\u0007\b\u0002",
    "\u0002\u008f\u0091\u0003\u0002\u0002\u0002\u0090\u008d\u0003\u0002\u0002",
    "\u0002\u0090\u0091\u0003\u0002\u0002\u0002\u0091\u0092\u0003\u0002\u0002",
    "\u0002\u0092\u0097\u0005\u001e\u0010\u0002\u0093\u0095\u0007$\u0002",
    "\u0002\u0094\u0093\u0003\u0002\u0002\u0002\u0094\u0095\u0003\u0002\u0002",
    "\u0002\u0095\u0096\u0003\u0002\u0002\u0002\u0096\u0098\u0005\u001c\u000f",
    "\u0002\u0097\u0094\u0003\u0002\u0002\u0002\u0097\u0098\u0003\u0002\u0002",
    "\u0002\u0098\u009b\u0003\u0002\u0002\u0002\u0099\u009b\u0005\u001e\u0010",
    "\u0002\u009a\u0090\u0003\u0002\u0002\u0002\u009a\u0099\u0003\u0002\u0002",
    "\u0002\u009b\u000f\u0003\u0002\u0002\u0002\u009c\u009e\u0005 \u0011",
    "\u0002\u009d\u009f\t\u0003\u0002\u0002\u009e\u009d\u0003\u0002\u0002",
    "\u0002\u009e\u009f\u0003\u0002\u0002\u0002\u009f\u0011\u0003\u0002\u0002",
    "\u0002\u00a0\u00a1\t\u0004\u0002\u0002\u00a1\u0013\u0003\u0002\u0002",
    "\u0002\u00a2\u00a3\u0005\u001e\u0010\u0002\u00a3\u0015\u0003\u0002\u0002",
    "\u0002\u00a4\u00a5\u0005\u001e\u0010\u0002\u00a5\u0017\u0003\u0002\u0002",
    "\u0002\u00a6\u00a7\u0005\u001e\u0010\u0002\u00a7\u0019\u0003\u0002\u0002",
    "\u0002\u00a8\u00a9\u0005\u001e\u0010\u0002\u00a9\u001b\u0003\u0002\u0002",
    "\u0002\u00aa\u00ab\u0005\u001e\u0010\u0002\u00ab\u001d\u0003\u0002\u0002",
    "\u0002\u00ac\u00b4\u0007\u0016\u0002\u0002\u00ad\u00b4\u0005$\u0013",
    "\u0002\u00ae\u00b4\u0007/\u0002\u0002\u00af\u00b0\u0007\u0004\u0002",
    "\u0002\u00b0\u00b1\u0005\u001e\u0010\u0002\u00b1\u00b2\u0007\u0005\u0002",
    "\u0002\u00b2\u00b4\u0003\u0002\u0002\u0002\u00b3\u00ac\u0003\u0002\u0002",
    "\u0002\u00b3\u00ad\u0003\u0002\u0002\u0002\u00b3\u00ae\u0003\u0002\u0002",
    "\u0002\u00b3\u00af\u0003\u0002\u0002\u0002\u00b4\u001f\u0003\u0002\u0002",
    "\u0002\u00b5\u00b6\b\u0011\u0001\u0002\u00b6\u00c9\u0005\"\u0012\u0002",
    "\u00b7\u00b8\u0005\u0014\u000b\u0002\u00b8\u00b9\u0007\b\u0002\u0002",
    "\u00b9\u00bb\u0003\u0002\u0002\u0002\u00ba\u00b7\u0003\u0002\u0002\u0002",
    "\u00ba\u00bb\u0003\u0002\u0002\u0002\u00bb\u00bc\u0003\u0002\u0002\u0002",
    "\u00bc\u00bd\u0005\u000e\b\u0002\u00bd\u00be\u0007\b\u0002\u0002\u00be",
    "\u00c0\u0003\u0002\u0002\u0002\u00bf\u00ba\u0003\u0002\u0002\u0002\u00bf",
    "\u00c0\u0003\u0002\u0002\u0002\u00c0\u00c1\u0003\u0002\u0002\u0002\u00c1",
    "\u00c9\u0005\u001a\u000e\u0002\u00c2\u00c3\u0007\t\u0002\u0002\u00c3",
    "\u00c9\u0005 \u0011\n\u00c4\u00c5\u0007\u0004\u0002\u0002\u00c5\u00c6",
    "\u0005 \u0011\u0002\u00c6\u00c7\u0007\u0005\u0002\u0002\u00c7\u00c9",
    "\u0003\u0002\u0002\u0002\u00c8\u00b5\u0003\u0002\u0002\u0002\u00c8\u00bf",
    "\u0003\u0002\u0002\u0002\u00c8\u00c2\u0003\u0002\u0002\u0002\u00c8\u00c4",
    "\u0003\u0002\u0002\u0002\u00c9\u00de\u0003\u0002\u0002\u0002\u00ca\u00cb",
    "\f\t\u0002\u0002\u00cb\u00cc\t\u0005\u0002\u0002\u00cc\u00dd\u0005 ",
    "\u0011\n\u00cd\u00ce\f\b\u0002\u0002\u00ce\u00cf\t\u0006\u0002\u0002",
    "\u00cf\u00dd\u0005 \u0011\t\u00d0\u00d1\f\u0007\u0002\u0002\u00d1\u00d2",
    "\t\u0007\u0002\u0002\u00d2\u00dd\u0005 \u0011\b\u00d3\u00d4\f\u0006",
    "\u0002\u0002\u00d4\u00d5\t\b\u0002\u0002\u00d5\u00dd\u0005 \u0011\u0007",
    "\u00d6\u00d7\f\u0005\u0002\u0002\u00d7\u00d8\u0007\'\u0002\u0002\u00d8",
    "\u00dd\u0005 \u0011\u0006\u00d9\u00da\f\u0004\u0002\u0002\u00da\u00db",
    "\u0007(\u0002\u0002\u00db\u00dd\u0005 \u0011\u0005\u00dc\u00ca\u0003",
    "\u0002\u0002\u0002\u00dc\u00cd\u0003\u0002\u0002\u0002\u00dc\u00d0\u0003",
    "\u0002\u0002\u0002\u00dc\u00d3\u0003\u0002\u0002\u0002\u00dc\u00d6\u0003",
    "\u0002\u0002\u0002\u00dc\u00d9\u0003\u0002\u0002\u0002\u00dd\u00e0\u0003",
    "\u0002\u0002\u0002\u00de\u00dc\u0003\u0002\u0002\u0002\u00de\u00df\u0003",
    "\u0002\u0002\u0002\u00df!\u0003\u0002\u0002\u0002\u00e0\u00de\u0003",
    "\u0002\u0002\u0002\u00e1\u00e2\t\t\u0002\u0002\u00e2#\u0003\u0002\u0002",
    "\u0002\u00e3\u00e4\t\n\u0002\u0002\u00e4%\u0003\u0002\u0002\u0002\u001e",
    "05BIRUYbgiru{}\u0086\u0089\u008b\u0090\u0094\u0097\u009a\u009e\u00b3",
    "\u00ba\u00bf\u00c8\u00dc\u00de"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "';'", "'('", "')'", "','", "'*'", "'.'", "'-'", 
                     "'/'", "'%'", "'+'", "'<'", "'<='", "'>'", "'>='", 
                     "'='", "'=='", "'!='", "'<>'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, "NUMERIC_LITERAL", "IDENTIFIER", "K_CREATE", 
                      "K_ON", "K_SELECT", "K_DISTINCT", "K_FROM", "K_WHERE", 
                      "K_GROUP", "K_BY", "K_HAVING", "K_INDEX", "K_ORDER", 
                      "K_LIMIT", "K_OFFSET", "K_AS", "K_ASC", "K_DESC", 
                      "K_AND", "K_OR", "K_COLUMN", "K_IN", "K_TABLE", "K_UNIQUE", 
                      "K_WITH", "SPACES", "STRING_LITERAL" ];

var ruleNames =  [ "parse", "statement_list", "statement", "create_index_statemnt", 
                   "select_statement", "result_column", "table_name", "ordering_term", 
                   "column_alias", "database_name", "index_name", "indexed_column", 
                   "column_name", "table_alias", "name", "expr", "literal_value", 
                   "keyword" ];

function SQLParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SQLParser.prototype = Object.create(antlr4.Parser.prototype);
SQLParser.prototype.constructor = SQLParser;

Object.defineProperty(SQLParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SQLParser.EOF = antlr4.Token.EOF;
SQLParser.T__0 = 1;
SQLParser.T__1 = 2;
SQLParser.T__2 = 3;
SQLParser.T__3 = 4;
SQLParser.T__4 = 5;
SQLParser.T__5 = 6;
SQLParser.T__6 = 7;
SQLParser.T__7 = 8;
SQLParser.T__8 = 9;
SQLParser.T__9 = 10;
SQLParser.T__10 = 11;
SQLParser.T__11 = 12;
SQLParser.T__12 = 13;
SQLParser.T__13 = 14;
SQLParser.T__14 = 15;
SQLParser.T__15 = 16;
SQLParser.T__16 = 17;
SQLParser.T__17 = 18;
SQLParser.NUMERIC_LITERAL = 19;
SQLParser.IDENTIFIER = 20;
SQLParser.K_CREATE = 21;
SQLParser.K_ON = 22;
SQLParser.K_SELECT = 23;
SQLParser.K_DISTINCT = 24;
SQLParser.K_FROM = 25;
SQLParser.K_WHERE = 26;
SQLParser.K_GROUP = 27;
SQLParser.K_BY = 28;
SQLParser.K_HAVING = 29;
SQLParser.K_INDEX = 30;
SQLParser.K_ORDER = 31;
SQLParser.K_LIMIT = 32;
SQLParser.K_OFFSET = 33;
SQLParser.K_AS = 34;
SQLParser.K_ASC = 35;
SQLParser.K_DESC = 36;
SQLParser.K_AND = 37;
SQLParser.K_OR = 38;
SQLParser.K_COLUMN = 39;
SQLParser.K_IN = 40;
SQLParser.K_TABLE = 41;
SQLParser.K_UNIQUE = 42;
SQLParser.K_WITH = 43;
SQLParser.SPACES = 44;
SQLParser.STRING_LITERAL = 45;

SQLParser.RULE_parse = 0;
SQLParser.RULE_statement_list = 1;
SQLParser.RULE_statement = 2;
SQLParser.RULE_create_index_statemnt = 3;
SQLParser.RULE_select_statement = 4;
SQLParser.RULE_result_column = 5;
SQLParser.RULE_table_name = 6;
SQLParser.RULE_ordering_term = 7;
SQLParser.RULE_column_alias = 8;
SQLParser.RULE_database_name = 9;
SQLParser.RULE_index_name = 10;
SQLParser.RULE_indexed_column = 11;
SQLParser.RULE_column_name = 12;
SQLParser.RULE_table_alias = 13;
SQLParser.RULE_name = 14;
SQLParser.RULE_expr = 15;
SQLParser.RULE_literal_value = 16;
SQLParser.RULE_keyword = 17;

function ParseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SQLParser.RULE_parse;
    return this;
}

ParseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParseContext.prototype.constructor = ParseContext;

ParseContext.prototype.statement_list = function() {
    return this.getTypedRuleContext(Statement_listContext,0);
};

ParseContext.prototype.EOF = function() {
    return this.getToken(SQLParser.EOF, 0);
};

ParseContext.prototype.enterRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.enterParse(this);
	}
};

ParseContext.prototype.exitRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.exitParse(this);
	}
};




SQLParser.ParseContext = ParseContext;

SQLParser.prototype.parse = function() {

    var localctx = new ParseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SQLParser.RULE_parse);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 36;
        this.statement_list();
        this.state = 37;
        this.match(SQLParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Statement_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SQLParser.RULE_statement_list;
    return this;
}

Statement_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Statement_listContext.prototype.constructor = Statement_listContext;

Statement_listContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

Statement_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.enterStatement_list(this);
	}
};

Statement_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.exitStatement_list(this);
	}
};




SQLParser.Statement_listContext = Statement_listContext;

SQLParser.prototype.statement_list = function() {

    var localctx = new Statement_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SQLParser.RULE_statement_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
        this.statement();
        this.state = 40;
        this.match(SQLParser.T__0);
        this.state = 46;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SQLParser.K_CREATE || _la===SQLParser.K_SELECT) {
            this.state = 41;
            this.statement();
            this.state = 42;
            this.match(SQLParser.T__0);
            this.state = 48;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SQLParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.create_index_statemnt = function() {
    return this.getTypedRuleContext(Create_index_statemntContext,0);
};

StatementContext.prototype.select_statement = function() {
    return this.getTypedRuleContext(Select_statementContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.exitStatement(this);
	}
};




SQLParser.StatementContext = StatementContext;

SQLParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SQLParser.RULE_statement);
    try {
        this.state = 51;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SQLParser.K_CREATE:
            this.enterOuterAlt(localctx, 1);
            this.state = 49;
            this.create_index_statemnt();
            break;
        case SQLParser.K_SELECT:
            this.enterOuterAlt(localctx, 2);
            this.state = 50;
            this.select_statement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Create_index_statemntContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SQLParser.RULE_create_index_statemnt;
    return this;
}

Create_index_statemntContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Create_index_statemntContext.prototype.constructor = Create_index_statemntContext;

Create_index_statemntContext.prototype.K_CREATE = function() {
    return this.getToken(SQLParser.K_CREATE, 0);
};

Create_index_statemntContext.prototype.K_INDEX = function() {
    return this.getToken(SQLParser.K_INDEX, 0);
};

Create_index_statemntContext.prototype.index_name = function() {
    return this.getTypedRuleContext(Index_nameContext,0);
};

Create_index_statemntContext.prototype.K_ON = function() {
    return this.getToken(SQLParser.K_ON, 0);
};

Create_index_statemntContext.prototype.table_name = function() {
    return this.getTypedRuleContext(Table_nameContext,0);
};

Create_index_statemntContext.prototype.indexed_column = function() {
    return this.getTypedRuleContext(Indexed_columnContext,0);
};

Create_index_statemntContext.prototype.enterRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.enterCreate_index_statemnt(this);
	}
};

Create_index_statemntContext.prototype.exitRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.exitCreate_index_statemnt(this);
	}
};




SQLParser.Create_index_statemntContext = Create_index_statemntContext;

SQLParser.prototype.create_index_statemnt = function() {

    var localctx = new Create_index_statemntContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SQLParser.RULE_create_index_statemnt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.match(SQLParser.K_CREATE);
        this.state = 54;
        this.match(SQLParser.K_INDEX);
        this.state = 55;
        this.index_name();
        this.state = 56;
        this.match(SQLParser.K_ON);
        this.state = 57;
        this.table_name();
        this.state = 58;
        this.match(SQLParser.T__1);
        this.state = 59;
        this.indexed_column();
        this.state = 60;
        this.match(SQLParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Select_statementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SQLParser.RULE_select_statement;
    return this;
}

Select_statementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Select_statementContext.prototype.constructor = Select_statementContext;

Select_statementContext.prototype.K_SELECT = function() {
    return this.getToken(SQLParser.K_SELECT, 0);
};

Select_statementContext.prototype.result_column = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Result_columnContext);
    } else {
        return this.getTypedRuleContext(Result_columnContext,i);
    }
};

Select_statementContext.prototype.K_DISTINCT = function() {
    return this.getToken(SQLParser.K_DISTINCT, 0);
};

Select_statementContext.prototype.K_FROM = function() {
    return this.getToken(SQLParser.K_FROM, 0);
};

Select_statementContext.prototype.K_WHERE = function() {
    return this.getToken(SQLParser.K_WHERE, 0);
};

Select_statementContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

Select_statementContext.prototype.K_GROUP = function() {
    return this.getToken(SQLParser.K_GROUP, 0);
};

Select_statementContext.prototype.K_BY = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SQLParser.K_BY);
    } else {
        return this.getToken(SQLParser.K_BY, i);
    }
};


Select_statementContext.prototype.K_ORDER = function() {
    return this.getToken(SQLParser.K_ORDER, 0);
};

Select_statementContext.prototype.ordering_term = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Ordering_termContext);
    } else {
        return this.getTypedRuleContext(Ordering_termContext,i);
    }
};

Select_statementContext.prototype.K_LIMIT = function() {
    return this.getToken(SQLParser.K_LIMIT, 0);
};

Select_statementContext.prototype.table_name = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Table_nameContext);
    } else {
        return this.getTypedRuleContext(Table_nameContext,i);
    }
};

Select_statementContext.prototype.K_HAVING = function() {
    return this.getToken(SQLParser.K_HAVING, 0);
};

Select_statementContext.prototype.K_OFFSET = function() {
    return this.getToken(SQLParser.K_OFFSET, 0);
};

Select_statementContext.prototype.enterRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.enterSelect_statement(this);
	}
};

Select_statementContext.prototype.exitRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.exitSelect_statement(this);
	}
};




SQLParser.Select_statementContext = Select_statementContext;

SQLParser.prototype.select_statement = function() {

    var localctx = new Select_statementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SQLParser.RULE_select_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this.match(SQLParser.K_SELECT);
        this.state = 64;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        if(la_===1) {
            this.state = 63;
            this.match(SQLParser.K_DISTINCT);

        }
        this.state = 66;
        this.result_column();
        this.state = 71;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SQLParser.T__3) {
            this.state = 67;
            this.match(SQLParser.T__3);
            this.state = 68;
            this.result_column();
            this.state = 73;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 83;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SQLParser.K_FROM) {
            this.state = 74;
            this.match(SQLParser.K_FROM);

            this.state = 75;
            this.table_name();
            this.state = 80;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SQLParser.T__3) {
                this.state = 76;
                this.match(SQLParser.T__3);
                this.state = 77;
                this.table_name();
                this.state = 82;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 87;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SQLParser.K_WHERE) {
            this.state = 85;
            this.match(SQLParser.K_WHERE);
            this.state = 86;
            this.expr(0);
        }

        this.state = 103;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SQLParser.K_GROUP) {
            this.state = 89;
            this.match(SQLParser.K_GROUP);
            this.state = 90;
            this.match(SQLParser.K_BY);
            this.state = 91;
            this.expr(0);
            this.state = 96;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SQLParser.T__3) {
                this.state = 92;
                this.match(SQLParser.T__3);
                this.state = 93;
                this.expr(0);
                this.state = 98;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 101;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SQLParser.K_HAVING) {
                this.state = 99;
                this.match(SQLParser.K_HAVING);
                this.state = 100;
                this.expr(0);
            }

        }

        this.state = 115;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SQLParser.K_ORDER) {
            this.state = 105;
            this.match(SQLParser.K_ORDER);
            this.state = 106;
            this.match(SQLParser.K_BY);
            this.state = 107;
            this.ordering_term();
            this.state = 112;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SQLParser.T__3) {
                this.state = 108;
                this.match(SQLParser.T__3);
                this.state = 109;
                this.ordering_term();
                this.state = 114;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 123;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SQLParser.K_LIMIT) {
            this.state = 117;
            this.match(SQLParser.K_LIMIT);
            this.state = 118;
            this.expr(0);
            this.state = 121;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SQLParser.T__3 || _la===SQLParser.K_OFFSET) {
                this.state = 119;
                _la = this._input.LA(1);
                if(!(_la===SQLParser.T__3 || _la===SQLParser.K_OFFSET)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 120;
                this.expr(0);
            }

        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Result_columnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SQLParser.RULE_result_column;
    return this;
}

Result_columnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Result_columnContext.prototype.constructor = Result_columnContext;

Result_columnContext.prototype.table_name = function() {
    return this.getTypedRuleContext(Table_nameContext,0);
};

Result_columnContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Result_columnContext.prototype.column_alias = function() {
    return this.getTypedRuleContext(Column_aliasContext,0);
};

Result_columnContext.prototype.K_AS = function() {
    return this.getToken(SQLParser.K_AS, 0);
};

Result_columnContext.prototype.enterRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.enterResult_column(this);
	}
};

Result_columnContext.prototype.exitRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.exitResult_column(this);
	}
};




SQLParser.Result_columnContext = Result_columnContext;

SQLParser.prototype.result_column = function() {

    var localctx = new Result_columnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SQLParser.RULE_result_column);
    var _la = 0; // Token type
    try {
        this.state = 137;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 125;
            this.match(SQLParser.T__4);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 126;
            this.table_name();
            this.state = 127;
            this.match(SQLParser.T__5);
            this.state = 128;
            this.match(SQLParser.T__4);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 130;
            this.expr(0);
            this.state = 135;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 20)) & ~0x1f) == 0 && ((1 << (_la - 20)) & ((1 << (SQLParser.IDENTIFIER - 20)) | (1 << (SQLParser.K_AS - 20)) | (1 << (SQLParser.STRING_LITERAL - 20)))) !== 0)) {
                this.state = 132;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===SQLParser.K_AS) {
                    this.state = 131;
                    this.match(SQLParser.K_AS);
                }

                this.state = 134;
                this.column_alias();
            }

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Table_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SQLParser.RULE_table_name;
    return this;
}

Table_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Table_nameContext.prototype.constructor = Table_nameContext;

Table_nameContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

Table_nameContext.prototype.database_name = function() {
    return this.getTypedRuleContext(Database_nameContext,0);
};

Table_nameContext.prototype.table_alias = function() {
    return this.getTypedRuleContext(Table_aliasContext,0);
};

Table_nameContext.prototype.K_AS = function() {
    return this.getToken(SQLParser.K_AS, 0);
};

Table_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.enterTable_name(this);
	}
};

Table_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.exitTable_name(this);
	}
};




SQLParser.Table_nameContext = Table_nameContext;

SQLParser.prototype.table_name = function() {

    var localctx = new Table_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SQLParser.RULE_table_name);
    try {
        this.state = 152;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 142;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
            if(la_===1) {
                this.state = 139;
                this.database_name();
                this.state = 140;
                this.match(SQLParser.T__5);

            }
            this.state = 144;
            this.name();
            this.state = 149;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
            if(la_===1) {
                this.state = 146;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
                if(la_===1) {
                    this.state = 145;
                    this.match(SQLParser.K_AS);

                }
                this.state = 148;
                this.table_alias();

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 151;
            this.name();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Ordering_termContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SQLParser.RULE_ordering_term;
    return this;
}

Ordering_termContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ordering_termContext.prototype.constructor = Ordering_termContext;

Ordering_termContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

Ordering_termContext.prototype.K_ASC = function() {
    return this.getToken(SQLParser.K_ASC, 0);
};

Ordering_termContext.prototype.K_DESC = function() {
    return this.getToken(SQLParser.K_DESC, 0);
};

Ordering_termContext.prototype.enterRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.enterOrdering_term(this);
	}
};

Ordering_termContext.prototype.exitRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.exitOrdering_term(this);
	}
};




SQLParser.Ordering_termContext = Ordering_termContext;

SQLParser.prototype.ordering_term = function() {

    var localctx = new Ordering_termContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SQLParser.RULE_ordering_term);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        this.expr(0);
        this.state = 156;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SQLParser.K_ASC || _la===SQLParser.K_DESC) {
            this.state = 155;
            _la = this._input.LA(1);
            if(!(_la===SQLParser.K_ASC || _la===SQLParser.K_DESC)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Column_aliasContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SQLParser.RULE_column_alias;
    return this;
}

Column_aliasContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Column_aliasContext.prototype.constructor = Column_aliasContext;

Column_aliasContext.prototype.IDENTIFIER = function() {
    return this.getToken(SQLParser.IDENTIFIER, 0);
};

Column_aliasContext.prototype.STRING_LITERAL = function() {
    return this.getToken(SQLParser.STRING_LITERAL, 0);
};

Column_aliasContext.prototype.enterRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.enterColumn_alias(this);
	}
};

Column_aliasContext.prototype.exitRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.exitColumn_alias(this);
	}
};




SQLParser.Column_aliasContext = Column_aliasContext;

SQLParser.prototype.column_alias = function() {

    var localctx = new Column_aliasContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SQLParser.RULE_column_alias);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
        _la = this._input.LA(1);
        if(!(_la===SQLParser.IDENTIFIER || _la===SQLParser.STRING_LITERAL)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Database_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SQLParser.RULE_database_name;
    return this;
}

Database_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Database_nameContext.prototype.constructor = Database_nameContext;

Database_nameContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

Database_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.enterDatabase_name(this);
	}
};

Database_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.exitDatabase_name(this);
	}
};




SQLParser.Database_nameContext = Database_nameContext;

SQLParser.prototype.database_name = function() {

    var localctx = new Database_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SQLParser.RULE_database_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 160;
        this.name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Index_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SQLParser.RULE_index_name;
    return this;
}

Index_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Index_nameContext.prototype.constructor = Index_nameContext;

Index_nameContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

Index_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.enterIndex_name(this);
	}
};

Index_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.exitIndex_name(this);
	}
};




SQLParser.Index_nameContext = Index_nameContext;

SQLParser.prototype.index_name = function() {

    var localctx = new Index_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SQLParser.RULE_index_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162;
        this.name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Indexed_columnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SQLParser.RULE_indexed_column;
    return this;
}

Indexed_columnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Indexed_columnContext.prototype.constructor = Indexed_columnContext;

Indexed_columnContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

Indexed_columnContext.prototype.enterRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.enterIndexed_column(this);
	}
};

Indexed_columnContext.prototype.exitRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.exitIndexed_column(this);
	}
};




SQLParser.Indexed_columnContext = Indexed_columnContext;

SQLParser.prototype.indexed_column = function() {

    var localctx = new Indexed_columnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, SQLParser.RULE_indexed_column);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 164;
        this.name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Column_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SQLParser.RULE_column_name;
    return this;
}

Column_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Column_nameContext.prototype.constructor = Column_nameContext;

Column_nameContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

Column_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.enterColumn_name(this);
	}
};

Column_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.exitColumn_name(this);
	}
};




SQLParser.Column_nameContext = Column_nameContext;

SQLParser.prototype.column_name = function() {

    var localctx = new Column_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, SQLParser.RULE_column_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        this.name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Table_aliasContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SQLParser.RULE_table_alias;
    return this;
}

Table_aliasContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Table_aliasContext.prototype.constructor = Table_aliasContext;

Table_aliasContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

Table_aliasContext.prototype.enterRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.enterTable_alias(this);
	}
};

Table_aliasContext.prototype.exitRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.exitTable_alias(this);
	}
};




SQLParser.Table_aliasContext = Table_aliasContext;

SQLParser.prototype.table_alias = function() {

    var localctx = new Table_aliasContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, SQLParser.RULE_table_alias);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 168;
        this.name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SQLParser.RULE_name;
    return this;
}

NameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameContext.prototype.constructor = NameContext;

NameContext.prototype.IDENTIFIER = function() {
    return this.getToken(SQLParser.IDENTIFIER, 0);
};

NameContext.prototype.keyword = function() {
    return this.getTypedRuleContext(KeywordContext,0);
};

NameContext.prototype.STRING_LITERAL = function() {
    return this.getToken(SQLParser.STRING_LITERAL, 0);
};

NameContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

NameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.enterName(this);
	}
};

NameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.exitName(this);
	}
};




SQLParser.NameContext = NameContext;

SQLParser.prototype.name = function() {

    var localctx = new NameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, SQLParser.RULE_name);
    try {
        this.state = 177;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SQLParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 170;
            this.match(SQLParser.IDENTIFIER);
            break;
        case SQLParser.K_CREATE:
        case SQLParser.K_ON:
        case SQLParser.K_SELECT:
        case SQLParser.K_DISTINCT:
        case SQLParser.K_FROM:
        case SQLParser.K_WHERE:
        case SQLParser.K_GROUP:
        case SQLParser.K_BY:
        case SQLParser.K_HAVING:
        case SQLParser.K_INDEX:
        case SQLParser.K_ORDER:
        case SQLParser.K_LIMIT:
        case SQLParser.K_OFFSET:
        case SQLParser.K_AS:
        case SQLParser.K_ASC:
        case SQLParser.K_DESC:
        case SQLParser.K_AND:
        case SQLParser.K_OR:
        case SQLParser.K_COLUMN:
        case SQLParser.K_IN:
        case SQLParser.K_TABLE:
        case SQLParser.K_UNIQUE:
        case SQLParser.K_WITH:
            this.enterOuterAlt(localctx, 2);
            this.state = 171;
            this.keyword();
            break;
        case SQLParser.STRING_LITERAL:
            this.enterOuterAlt(localctx, 3);
            this.state = 172;
            this.match(SQLParser.STRING_LITERAL);
            break;
        case SQLParser.T__1:
            this.enterOuterAlt(localctx, 4);
            this.state = 173;
            this.match(SQLParser.T__1);
            this.state = 174;
            this.name();
            this.state = 175;
            this.match(SQLParser.T__2);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SQLParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.literal_value = function() {
    return this.getTypedRuleContext(Literal_valueContext,0);
};

ExprContext.prototype.column_name = function() {
    return this.getTypedRuleContext(Column_nameContext,0);
};

ExprContext.prototype.table_name = function() {
    return this.getTypedRuleContext(Table_nameContext,0);
};

ExprContext.prototype.database_name = function() {
    return this.getTypedRuleContext(Database_nameContext,0);
};

ExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprContext.prototype.K_AND = function() {
    return this.getToken(SQLParser.K_AND, 0);
};

ExprContext.prototype.K_OR = function() {
    return this.getToken(SQLParser.K_OR, 0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.exitExpr(this);
	}
};



SQLParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 30;
    this.enterRecursionRule(localctx, 30, SQLParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.state = 180;
            this.literal_value();
            break;

        case 2:
            this.state = 189;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
            if(la_===1) {
                this.state = 184;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
                if(la_===1) {
                    this.state = 181;
                    this.database_name();
                    this.state = 182;
                    this.match(SQLParser.T__5);

                }
                this.state = 186;
                this.table_name();
                this.state = 187;
                this.match(SQLParser.T__5);

            }
            this.state = 191;
            this.column_name();
            break;

        case 3:
            this.state = 192;
            this.match(SQLParser.T__6);
            this.state = 193;
            this.expr(8);
            break;

        case 4:
            this.state = 194;
            this.match(SQLParser.T__1);
            this.state = 195;
            this.expr(0);
            this.state = 196;
            this.match(SQLParser.T__2);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 220;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 218;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, SQLParser.RULE_expr);
                    this.state = 200;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 201;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SQLParser.T__4) | (1 << SQLParser.T__7) | (1 << SQLParser.T__8))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 202;
                    this.expr(8);
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, SQLParser.RULE_expr);
                    this.state = 203;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 204;
                    _la = this._input.LA(1);
                    if(!(_la===SQLParser.T__6 || _la===SQLParser.T__9)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 205;
                    this.expr(7);
                    break;

                case 3:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, SQLParser.RULE_expr);
                    this.state = 206;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 207;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SQLParser.T__10) | (1 << SQLParser.T__11) | (1 << SQLParser.T__12) | (1 << SQLParser.T__13))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 208;
                    this.expr(6);
                    break;

                case 4:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, SQLParser.RULE_expr);
                    this.state = 209;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 210;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SQLParser.T__14) | (1 << SQLParser.T__15) | (1 << SQLParser.T__16) | (1 << SQLParser.T__17))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 211;
                    this.expr(5);
                    break;

                case 5:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, SQLParser.RULE_expr);
                    this.state = 212;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 213;
                    this.match(SQLParser.K_AND);
                    this.state = 214;
                    this.expr(4);
                    break;

                case 6:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, SQLParser.RULE_expr);
                    this.state = 215;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 216;
                    this.match(SQLParser.K_OR);
                    this.state = 217;
                    this.expr(3);
                    break;

                } 
            }
            this.state = 222;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function Literal_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SQLParser.RULE_literal_value;
    return this;
}

Literal_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Literal_valueContext.prototype.constructor = Literal_valueContext;

Literal_valueContext.prototype.NUMERIC_LITERAL = function() {
    return this.getToken(SQLParser.NUMERIC_LITERAL, 0);
};

Literal_valueContext.prototype.STRING_LITERAL = function() {
    return this.getToken(SQLParser.STRING_LITERAL, 0);
};

Literal_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.enterLiteral_value(this);
	}
};

Literal_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.exitLiteral_value(this);
	}
};




SQLParser.Literal_valueContext = Literal_valueContext;

SQLParser.prototype.literal_value = function() {

    var localctx = new Literal_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, SQLParser.RULE_literal_value);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 223;
        _la = this._input.LA(1);
        if(!(_la===SQLParser.NUMERIC_LITERAL || _la===SQLParser.STRING_LITERAL)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function KeywordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SQLParser.RULE_keyword;
    return this;
}

KeywordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeywordContext.prototype.constructor = KeywordContext;

KeywordContext.prototype.K_AND = function() {
    return this.getToken(SQLParser.K_AND, 0);
};

KeywordContext.prototype.K_AS = function() {
    return this.getToken(SQLParser.K_AS, 0);
};

KeywordContext.prototype.K_ASC = function() {
    return this.getToken(SQLParser.K_ASC, 0);
};

KeywordContext.prototype.K_BY = function() {
    return this.getToken(SQLParser.K_BY, 0);
};

KeywordContext.prototype.K_COLUMN = function() {
    return this.getToken(SQLParser.K_COLUMN, 0);
};

KeywordContext.prototype.K_CREATE = function() {
    return this.getToken(SQLParser.K_CREATE, 0);
};

KeywordContext.prototype.K_DESC = function() {
    return this.getToken(SQLParser.K_DESC, 0);
};

KeywordContext.prototype.K_DISTINCT = function() {
    return this.getToken(SQLParser.K_DISTINCT, 0);
};

KeywordContext.prototype.K_FROM = function() {
    return this.getToken(SQLParser.K_FROM, 0);
};

KeywordContext.prototype.K_GROUP = function() {
    return this.getToken(SQLParser.K_GROUP, 0);
};

KeywordContext.prototype.K_HAVING = function() {
    return this.getToken(SQLParser.K_HAVING, 0);
};

KeywordContext.prototype.K_IN = function() {
    return this.getToken(SQLParser.K_IN, 0);
};

KeywordContext.prototype.K_INDEX = function() {
    return this.getToken(SQLParser.K_INDEX, 0);
};

KeywordContext.prototype.K_LIMIT = function() {
    return this.getToken(SQLParser.K_LIMIT, 0);
};

KeywordContext.prototype.K_OFFSET = function() {
    return this.getToken(SQLParser.K_OFFSET, 0);
};

KeywordContext.prototype.K_ON = function() {
    return this.getToken(SQLParser.K_ON, 0);
};

KeywordContext.prototype.K_OR = function() {
    return this.getToken(SQLParser.K_OR, 0);
};

KeywordContext.prototype.K_ORDER = function() {
    return this.getToken(SQLParser.K_ORDER, 0);
};

KeywordContext.prototype.K_SELECT = function() {
    return this.getToken(SQLParser.K_SELECT, 0);
};

KeywordContext.prototype.K_TABLE = function() {
    return this.getToken(SQLParser.K_TABLE, 0);
};

KeywordContext.prototype.K_UNIQUE = function() {
    return this.getToken(SQLParser.K_UNIQUE, 0);
};

KeywordContext.prototype.K_WHERE = function() {
    return this.getToken(SQLParser.K_WHERE, 0);
};

KeywordContext.prototype.K_WITH = function() {
    return this.getToken(SQLParser.K_WITH, 0);
};

KeywordContext.prototype.enterRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.enterKeyword(this);
	}
};

KeywordContext.prototype.exitRule = function(listener) {
    if(listener instanceof SQLListener ) {
        listener.exitKeyword(this);
	}
};




SQLParser.KeywordContext = KeywordContext;

SQLParser.prototype.keyword = function() {

    var localctx = new KeywordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, SQLParser.RULE_keyword);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 225;
        _la = this._input.LA(1);
        if(!(((((_la - 21)) & ~0x1f) == 0 && ((1 << (_la - 21)) & ((1 << (SQLParser.K_CREATE - 21)) | (1 << (SQLParser.K_ON - 21)) | (1 << (SQLParser.K_SELECT - 21)) | (1 << (SQLParser.K_DISTINCT - 21)) | (1 << (SQLParser.K_FROM - 21)) | (1 << (SQLParser.K_WHERE - 21)) | (1 << (SQLParser.K_GROUP - 21)) | (1 << (SQLParser.K_BY - 21)) | (1 << (SQLParser.K_HAVING - 21)) | (1 << (SQLParser.K_INDEX - 21)) | (1 << (SQLParser.K_ORDER - 21)) | (1 << (SQLParser.K_LIMIT - 21)) | (1 << (SQLParser.K_OFFSET - 21)) | (1 << (SQLParser.K_AS - 21)) | (1 << (SQLParser.K_ASC - 21)) | (1 << (SQLParser.K_DESC - 21)) | (1 << (SQLParser.K_AND - 21)) | (1 << (SQLParser.K_OR - 21)) | (1 << (SQLParser.K_COLUMN - 21)) | (1 << (SQLParser.K_IN - 21)) | (1 << (SQLParser.K_TABLE - 21)) | (1 << (SQLParser.K_UNIQUE - 21)) | (1 << (SQLParser.K_WITH - 21)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


SQLParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 15:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

SQLParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 7);
		case 1:
			return this.precpred(this._ctx, 6);
		case 2:
			return this.precpred(this._ctx, 5);
		case 3:
			return this.precpred(this._ctx, 4);
		case 4:
			return this.precpred(this._ctx, 3);
		case 5:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.SQLParser = SQLParser;
