// Generated from SQL.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002.\u0186\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
    "8\t8\u00049\t9\u0004:\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004",
    "?\t?\u0004@\t@\u0004A\tA\u0004B\tB\u0004C\tC\u0004D\tD\u0004E\tE\u0004",
    "F\tF\u0004G\tG\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0006\u0014\u00ba\n",
    "\u0014\r\u0014\u000e\u0014\u00bb\u0003\u0014\u0003\u0014\u0007\u0014",
    "\u00c0\n\u0014\f\u0014\u000e\u0014\u00c3\u000b\u0014\u0005\u0014\u00c5",
    "\n\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0007\u0015",
    "\u00cb\n\u0015\f\u0015\u000e\u0015\u00ce\u000b\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    " \u0003 \u0003 \u0003 \u0003 \u0003 \u0003!\u0003!\u0003!\u0003!\u0003",
    "!\u0003!\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003",
    "#\u0003#\u0003#\u0003$\u0003$\u0003$\u0003$\u0003%\u0003%\u0003%\u0003",
    "%\u0003%\u0003&\u0003&\u0003&\u0003&\u0003\'\u0003\'\u0003\'\u0003(",
    "\u0003(\u0003(\u0003(\u0003(\u0003(\u0003(\u0003)\u0003)\u0003)\u0003",
    "*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003+\u0003+\u0003+\u0003+\u0003",
    "+\u0003+\u0003+\u0003,\u0003,\u0003,\u0003,\u0003,\u0003-\u0003-\u0003",
    ".\u0003.\u0003/\u0003/\u00030\u00030\u00031\u00031\u00032\u00032\u0003",
    "3\u00033\u00034\u00034\u00035\u00035\u00036\u00036\u00037\u00037\u0003",
    "8\u00038\u00039\u00039\u0003:\u0003:\u0003;\u0003;\u0003<\u0003<\u0003",
    "=\u0003=\u0003>\u0003>\u0003?\u0003?\u0003@\u0003@\u0003A\u0003A\u0003",
    "B\u0003B\u0003C\u0003C\u0003D\u0003D\u0003E\u0003E\u0003F\u0003F\u0003",
    "G\u0003G\u0003G\u0003G\u0002\u0002H\u0003\u0003\u0005\u0004\u0007\u0005",
    "\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r",
    "\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014",
    "\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a3\u001b5\u001c7\u001d9\u001e",
    ";\u001f= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y\u0002[\u0002]\u0002_\u0002a\u0002",
    "c\u0002e\u0002g\u0002i\u0002k\u0002m\u0002o\u0002q\u0002s\u0002u\u0002",
    "w\u0002y\u0002{\u0002}\u0002\u007f\u0002\u0081\u0002\u0083\u0002\u0085",
    "\u0002\u0087\u0002\u0089\u0002\u008b\u0002\u008d.\u0003\u0002\u001f",
    "\u0003\u00022;\u0003\u0002$$\u0004\u0002CCcc\u0004\u0002DDdd\u0004\u0002",
    "EEee\u0004\u0002FFff\u0004\u0002GGgg\u0004\u0002HHhh\u0004\u0002IIi",
    "i\u0004\u0002JJjj\u0004\u0002KKkk\u0004\u0002LLll\u0004\u0002MMmm\u0004",
    "\u0002NNnn\u0004\u0002OOoo\u0004\u0002PPpp\u0004\u0002QQqq\u0004\u0002",
    "RRrr\u0004\u0002SSss\u0004\u0002TTtt\u0004\u0002UUuu\u0004\u0002VVv",
    "v\u0004\u0002WWww\u0004\u0002XXxx\u0004\u0002YYyy\u0004\u0002ZZzz\u0004",
    "\u0002[[{{\u0004\u0002\\\\||\u0005\u0002\u000b\r\u000f\u000f\"\"\u0002",
    "\u0170\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
    "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
    "\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002",
    "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002",
    "\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002",
    "\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002",
    "\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002",
    "\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002",
    "\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002",
    "\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0002",
    "+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003",
    "\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002\u00023\u0003\u0002",
    "\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u00027\u0003\u0002\u0002",
    "\u0002\u00029\u0003\u0002\u0002\u0002\u0002;\u0003\u0002\u0002\u0002",
    "\u0002=\u0003\u0002\u0002\u0002\u0002?\u0003\u0002\u0002\u0002\u0002",
    "A\u0003\u0002\u0002\u0002\u0002C\u0003\u0002\u0002\u0002\u0002E\u0003",
    "\u0002\u0002\u0002\u0002G\u0003\u0002\u0002\u0002\u0002I\u0003\u0002",
    "\u0002\u0002\u0002K\u0003\u0002\u0002\u0002\u0002M\u0003\u0002\u0002",
    "\u0002\u0002O\u0003\u0002\u0002\u0002\u0002Q\u0003\u0002\u0002\u0002",
    "\u0002S\u0003\u0002\u0002\u0002\u0002U\u0003\u0002\u0002\u0002\u0002",
    "W\u0003\u0002\u0002\u0002\u0002\u008d\u0003\u0002\u0002\u0002\u0003",
    "\u008f\u0003\u0002\u0002\u0002\u0005\u0091\u0003\u0002\u0002\u0002\u0007",
    "\u0093\u0003\u0002\u0002\u0002\t\u0095\u0003\u0002\u0002\u0002\u000b",
    "\u0097\u0003\u0002\u0002\u0002\r\u0099\u0003\u0002\u0002\u0002\u000f",
    "\u009b\u0003\u0002\u0002\u0002\u0011\u009d\u0003\u0002\u0002\u0002\u0013",
    "\u009f\u0003\u0002\u0002\u0002\u0015\u00a1\u0003\u0002\u0002\u0002\u0017",
    "\u00a3\u0003\u0002\u0002\u0002\u0019\u00a5\u0003\u0002\u0002\u0002\u001b",
    "\u00a8\u0003\u0002\u0002\u0002\u001d\u00aa\u0003\u0002\u0002\u0002\u001f",
    "\u00ad\u0003\u0002\u0002\u0002!\u00af\u0003\u0002\u0002\u0002#\u00b2",
    "\u0003\u0002\u0002\u0002%\u00b5\u0003\u0002\u0002\u0002\'\u00b9\u0003",
    "\u0002\u0002\u0002)\u00c6\u0003\u0002\u0002\u0002+\u00d1\u0003\u0002",
    "\u0002\u0002-\u00d8\u0003\u0002\u0002\u0002/\u00db\u0003\u0002\u0002",
    "\u00021\u00e2\u0003\u0002\u0002\u00023\u00eb\u0003\u0002\u0002\u0002",
    "5\u00f0\u0003\u0002\u0002\u00027\u00f6\u0003\u0002\u0002\u00029\u00fc",
    "\u0003\u0002\u0002\u0002;\u00ff\u0003\u0002\u0002\u0002=\u0106\u0003",
    "\u0002\u0002\u0002?\u010c\u0003\u0002\u0002\u0002A\u0112\u0003\u0002",
    "\u0002\u0002C\u0118\u0003\u0002\u0002\u0002E\u011f\u0003\u0002\u0002",
    "\u0002G\u0122\u0003\u0002\u0002\u0002I\u0126\u0003\u0002\u0002\u0002",
    "K\u012b\u0003\u0002\u0002\u0002M\u012f\u0003\u0002\u0002\u0002O\u0132",
    "\u0003\u0002\u0002\u0002Q\u0139\u0003\u0002\u0002\u0002S\u013c\u0003",
    "\u0002\u0002\u0002U\u0142\u0003\u0002\u0002\u0002W\u0149\u0003\u0002",
    "\u0002\u0002Y\u014e\u0003\u0002\u0002\u0002[\u0150\u0003\u0002\u0002",
    "\u0002]\u0152\u0003\u0002\u0002\u0002_\u0154\u0003\u0002\u0002\u0002",
    "a\u0156\u0003\u0002\u0002\u0002c\u0158\u0003\u0002\u0002\u0002e\u015a",
    "\u0003\u0002\u0002\u0002g\u015c\u0003\u0002\u0002\u0002i\u015e\u0003",
    "\u0002\u0002\u0002k\u0160\u0003\u0002\u0002\u0002m\u0162\u0003\u0002",
    "\u0002\u0002o\u0164\u0003\u0002\u0002\u0002q\u0166\u0003\u0002\u0002",
    "\u0002s\u0168\u0003\u0002\u0002\u0002u\u016a\u0003\u0002\u0002\u0002",
    "w\u016c\u0003\u0002\u0002\u0002y\u016e\u0003\u0002\u0002\u0002{\u0170",
    "\u0003\u0002\u0002\u0002}\u0172\u0003\u0002\u0002\u0002\u007f\u0174",
    "\u0003\u0002\u0002\u0002\u0081\u0176\u0003\u0002\u0002\u0002\u0083\u0178",
    "\u0003\u0002\u0002\u0002\u0085\u017a\u0003\u0002\u0002\u0002\u0087\u017c",
    "\u0003\u0002\u0002\u0002\u0089\u017e\u0003\u0002\u0002\u0002\u008b\u0180",
    "\u0003\u0002\u0002\u0002\u008d\u0182\u0003\u0002\u0002\u0002\u008f\u0090",
    "\u0007=\u0002\u0002\u0090\u0004\u0003\u0002\u0002\u0002\u0091\u0092",
    "\u0007*\u0002\u0002\u0092\u0006\u0003\u0002\u0002\u0002\u0093\u0094",
    "\u0007+\u0002\u0002\u0094\b\u0003\u0002\u0002\u0002\u0095\u0096\u0007",
    ".\u0002\u0002\u0096\n\u0003\u0002\u0002\u0002\u0097\u0098\u0007,\u0002",
    "\u0002\u0098\f\u0003\u0002\u0002\u0002\u0099\u009a\u00070\u0002\u0002",
    "\u009a\u000e\u0003\u0002\u0002\u0002\u009b\u009c\u0007/\u0002\u0002",
    "\u009c\u0010\u0003\u0002\u0002\u0002\u009d\u009e\u00071\u0002\u0002",
    "\u009e\u0012\u0003\u0002\u0002\u0002\u009f\u00a0\u0007\'\u0002\u0002",
    "\u00a0\u0014\u0003\u0002\u0002\u0002\u00a1\u00a2\u0007-\u0002\u0002",
    "\u00a2\u0016\u0003\u0002\u0002\u0002\u00a3\u00a4\u0007>\u0002\u0002",
    "\u00a4\u0018\u0003\u0002\u0002\u0002\u00a5\u00a6\u0007>\u0002\u0002",
    "\u00a6\u00a7\u0007?\u0002\u0002\u00a7\u001a\u0003\u0002\u0002\u0002",
    "\u00a8\u00a9\u0007@\u0002\u0002\u00a9\u001c\u0003\u0002\u0002\u0002",
    "\u00aa\u00ab\u0007@\u0002\u0002\u00ab\u00ac\u0007?\u0002\u0002\u00ac",
    "\u001e\u0003\u0002\u0002\u0002\u00ad\u00ae\u0007?\u0002\u0002\u00ae",
    " \u0003\u0002\u0002\u0002\u00af\u00b0\u0007?\u0002\u0002\u00b0\u00b1",
    "\u0007?\u0002\u0002\u00b1\"\u0003\u0002\u0002\u0002\u00b2\u00b3\u0007",
    "#\u0002\u0002\u00b3\u00b4\u0007?\u0002\u0002\u00b4$\u0003\u0002\u0002",
    "\u0002\u00b5\u00b6\u0007>\u0002\u0002\u00b6\u00b7\u0007@\u0002\u0002",
    "\u00b7&\u0003\u0002\u0002\u0002\u00b8\u00ba\t\u0002\u0002\u0002\u00b9",
    "\u00b8\u0003\u0002\u0002\u0002\u00ba\u00bb\u0003\u0002\u0002\u0002\u00bb",
    "\u00b9\u0003\u0002\u0002\u0002\u00bb\u00bc\u0003\u0002\u0002\u0002\u00bc",
    "\u00c4\u0003\u0002\u0002\u0002\u00bd\u00c1\u00070\u0002\u0002\u00be",
    "\u00c0\t\u0002\u0002\u0002\u00bf\u00be\u0003\u0002\u0002\u0002\u00c0",
    "\u00c3\u0003\u0002\u0002\u0002\u00c1\u00bf\u0003\u0002\u0002\u0002\u00c1",
    "\u00c2\u0003\u0002\u0002\u0002\u00c2\u00c5\u0003\u0002\u0002\u0002\u00c3",
    "\u00c1\u0003\u0002\u0002\u0002\u00c4\u00bd\u0003\u0002\u0002\u0002\u00c4",
    "\u00c5\u0003\u0002\u0002\u0002\u00c5(\u0003\u0002\u0002\u0002\u00c6",
    "\u00cc\u0007$\u0002\u0002\u00c7\u00cb\n\u0003\u0002\u0002\u00c8\u00c9",
    "\u0007$\u0002\u0002\u00c9\u00cb\u0007$\u0002\u0002\u00ca\u00c7\u0003",
    "\u0002\u0002\u0002\u00ca\u00c8\u0003\u0002\u0002\u0002\u00cb\u00ce\u0003",
    "\u0002\u0002\u0002\u00cc\u00ca\u0003\u0002\u0002\u0002\u00cc\u00cd\u0003",
    "\u0002\u0002\u0002\u00cd\u00cf\u0003\u0002\u0002\u0002\u00ce\u00cc\u0003",
    "\u0002\u0002\u0002\u00cf\u00d0\u0007$\u0002\u0002\u00d0*\u0003\u0002",
    "\u0002\u0002\u00d1\u00d2\u0005]/\u0002\u00d2\u00d3\u0005{>\u0002\u00d3",
    "\u00d4\u0005a1\u0002\u00d4\u00d5\u0005Y-\u0002\u00d5\u00d6\u0005\u007f",
    "@\u0002\u00d6\u00d7\u0005a1\u0002\u00d7,\u0003\u0002\u0002\u0002\u00d8",
    "\u00d9\u0005u;\u0002\u00d9\u00da\u0005s:\u0002\u00da.\u0003\u0002\u0002",
    "\u0002\u00db\u00dc\u0005}?\u0002\u00dc\u00dd\u0005a1\u0002\u00dd\u00de",
    "\u0005o8\u0002\u00de\u00df\u0005a1\u0002\u00df\u00e0\u0005]/\u0002\u00e0",
    "\u00e1\u0005\u007f@\u0002\u00e10\u0003\u0002\u0002\u0002\u00e2\u00e3",
    "\u0005_0\u0002\u00e3\u00e4\u0005i5\u0002\u00e4\u00e5\u0005}?\u0002\u00e5",
    "\u00e6\u0005\u007f@\u0002\u00e6\u00e7\u0005i5\u0002\u00e7\u00e8\u0005",
    "s:\u0002\u00e8\u00e9\u0005]/\u0002\u00e9\u00ea\u0005\u007f@\u0002\u00ea",
    "2\u0003\u0002\u0002\u0002\u00eb\u00ec\u0005c2\u0002\u00ec\u00ed\u0005",
    "{>\u0002\u00ed\u00ee\u0005u;\u0002\u00ee\u00ef\u0005q9\u0002\u00ef4",
    "\u0003\u0002\u0002\u0002\u00f0\u00f1\u0005\u0085C\u0002\u00f1\u00f2",
    "\u0005g4\u0002\u00f2\u00f3\u0005a1\u0002\u00f3\u00f4\u0005{>\u0002\u00f4",
    "\u00f5\u0005a1\u0002\u00f56\u0003\u0002\u0002\u0002\u00f6\u00f7\u0005",
    "e3\u0002\u00f7\u00f8\u0005{>\u0002\u00f8\u00f9\u0005u;\u0002\u00f9\u00fa",
    "\u0005\u0081A\u0002\u00fa\u00fb\u0005w<\u0002\u00fb8\u0003\u0002\u0002",
    "\u0002\u00fc\u00fd\u0005[.\u0002\u00fd\u00fe\u0005\u0089E\u0002\u00fe",
    ":\u0003\u0002\u0002\u0002\u00ff\u0100\u0005g4\u0002\u0100\u0101\u0005",
    "Y-\u0002\u0101\u0102\u0005\u0083B\u0002\u0102\u0103\u0005i5\u0002\u0103",
    "\u0104\u0005s:\u0002\u0104\u0105\u0005e3\u0002\u0105<\u0003\u0002\u0002",
    "\u0002\u0106\u0107\u0005i5\u0002\u0107\u0108\u0005s:\u0002\u0108\u0109",
    "\u0005_0\u0002\u0109\u010a\u0005a1\u0002\u010a\u010b\u0005\u0087D\u0002",
    "\u010b>\u0003\u0002\u0002\u0002\u010c\u010d\u0005u;\u0002\u010d\u010e",
    "\u0005{>\u0002\u010e\u010f\u0005_0\u0002\u010f\u0110\u0005a1\u0002\u0110",
    "\u0111\u0005{>\u0002\u0111@\u0003\u0002\u0002\u0002\u0112\u0113\u0005",
    "o8\u0002\u0113\u0114\u0005i5\u0002\u0114\u0115\u0005q9\u0002\u0115\u0116",
    "\u0005i5\u0002\u0116\u0117\u0005\u007f@\u0002\u0117B\u0003\u0002\u0002",
    "\u0002\u0118\u0119\u0005u;\u0002\u0119\u011a\u0005c2\u0002\u011a\u011b",
    "\u0005c2\u0002\u011b\u011c\u0005}?\u0002\u011c\u011d\u0005a1\u0002\u011d",
    "\u011e\u0005\u007f@\u0002\u011eD\u0003\u0002\u0002\u0002\u011f\u0120",
    "\u0005Y-\u0002\u0120\u0121\u0005}?\u0002\u0121F\u0003\u0002\u0002\u0002",
    "\u0122\u0123\u0005Y-\u0002\u0123\u0124\u0005}?\u0002\u0124\u0125\u0005",
    "]/\u0002\u0125H\u0003\u0002\u0002\u0002\u0126\u0127\u0005_0\u0002\u0127",
    "\u0128\u0005a1\u0002\u0128\u0129\u0005}?\u0002\u0129\u012a\u0005]/\u0002",
    "\u012aJ\u0003\u0002\u0002\u0002\u012b\u012c\u0005Y-\u0002\u012c\u012d",
    "\u0005s:\u0002\u012d\u012e\u0005_0\u0002\u012eL\u0003\u0002\u0002\u0002",
    "\u012f\u0130\u0005u;\u0002\u0130\u0131\u0005{>\u0002\u0131N\u0003\u0002",
    "\u0002\u0002\u0132\u0133\u0005]/\u0002\u0133\u0134\u0005u;\u0002\u0134",
    "\u0135\u0005o8\u0002\u0135\u0136\u0005\u0081A\u0002\u0136\u0137\u0005",
    "q9\u0002\u0137\u0138\u0005s:\u0002\u0138P\u0003\u0002\u0002\u0002\u0139",
    "\u013a\u0005i5\u0002\u013a\u013b\u0005s:\u0002\u013bR\u0003\u0002\u0002",
    "\u0002\u013c\u013d\u0005\u007f@\u0002\u013d\u013e\u0005Y-\u0002\u013e",
    "\u013f\u0005[.\u0002\u013f\u0140\u0005o8\u0002\u0140\u0141\u0005a1\u0002",
    "\u0141T\u0003\u0002\u0002\u0002\u0142\u0143\u0005\u0081A\u0002\u0143",
    "\u0144\u0005s:\u0002\u0144\u0145\u0005i5\u0002\u0145\u0146\u0005y=\u0002",
    "\u0146\u0147\u0005\u0081A\u0002\u0147\u0148\u0005a1\u0002\u0148V\u0003",
    "\u0002\u0002\u0002\u0149\u014a\u0005\u0085C\u0002\u014a\u014b\u0005",
    "i5\u0002\u014b\u014c\u0005\u007f@\u0002\u014c\u014d\u0005g4\u0002\u014d",
    "X\u0003\u0002\u0002\u0002\u014e\u014f\t\u0004\u0002\u0002\u014fZ\u0003",
    "\u0002\u0002\u0002\u0150\u0151\t\u0005\u0002\u0002\u0151\\\u0003\u0002",
    "\u0002\u0002\u0152\u0153\t\u0006\u0002\u0002\u0153^\u0003\u0002\u0002",
    "\u0002\u0154\u0155\t\u0007\u0002\u0002\u0155`\u0003\u0002\u0002\u0002",
    "\u0156\u0157\t\b\u0002\u0002\u0157b\u0003\u0002\u0002\u0002\u0158\u0159",
    "\t\t\u0002\u0002\u0159d\u0003\u0002\u0002\u0002\u015a\u015b\t\n\u0002",
    "\u0002\u015bf\u0003\u0002\u0002\u0002\u015c\u015d\t\u000b\u0002\u0002",
    "\u015dh\u0003\u0002\u0002\u0002\u015e\u015f\t\f\u0002\u0002\u015fj\u0003",
    "\u0002\u0002\u0002\u0160\u0161\t\r\u0002\u0002\u0161l\u0003\u0002\u0002",
    "\u0002\u0162\u0163\t\u000e\u0002\u0002\u0163n\u0003\u0002\u0002\u0002",
    "\u0164\u0165\t\u000f\u0002\u0002\u0165p\u0003\u0002\u0002\u0002\u0166",
    "\u0167\t\u0010\u0002\u0002\u0167r\u0003\u0002\u0002\u0002\u0168\u0169",
    "\t\u0011\u0002\u0002\u0169t\u0003\u0002\u0002\u0002\u016a\u016b\t\u0012",
    "\u0002\u0002\u016bv\u0003\u0002\u0002\u0002\u016c\u016d\t\u0013\u0002",
    "\u0002\u016dx\u0003\u0002\u0002\u0002\u016e\u016f\t\u0014\u0002\u0002",
    "\u016fz\u0003\u0002\u0002\u0002\u0170\u0171\t\u0015\u0002\u0002\u0171",
    "|\u0003\u0002\u0002\u0002\u0172\u0173\t\u0016\u0002\u0002\u0173~\u0003",
    "\u0002\u0002\u0002\u0174\u0175\t\u0017\u0002\u0002\u0175\u0080\u0003",
    "\u0002\u0002\u0002\u0176\u0177\t\u0018\u0002\u0002\u0177\u0082\u0003",
    "\u0002\u0002\u0002\u0178\u0179\t\u0019\u0002\u0002\u0179\u0084\u0003",
    "\u0002\u0002\u0002\u017a\u017b\t\u001a\u0002\u0002\u017b\u0086\u0003",
    "\u0002\u0002\u0002\u017c\u017d\t\u001b\u0002\u0002\u017d\u0088\u0003",
    "\u0002\u0002\u0002\u017e\u017f\t\u001c\u0002\u0002\u017f\u008a\u0003",
    "\u0002\u0002\u0002\u0180\u0181\t\u001d\u0002\u0002\u0181\u008c\u0003",
    "\u0002\u0002\u0002\u0182\u0183\t\u001e\u0002\u0002\u0183\u0184\u0003",
    "\u0002\u0002\u0002\u0184\u0185\bG\u0002\u0002\u0185\u008e\u0003\u0002",
    "\u0002\u0002\b\u0002\u00bb\u00c1\u00c4\u00ca\u00cc\u0003\u0002\u0003",
    "\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function SQLLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

SQLLexer.prototype = Object.create(antlr4.Lexer.prototype);
SQLLexer.prototype.constructor = SQLLexer;

Object.defineProperty(SQLLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

SQLLexer.EOF = antlr4.Token.EOF;
SQLLexer.T__0 = 1;
SQLLexer.T__1 = 2;
SQLLexer.T__2 = 3;
SQLLexer.T__3 = 4;
SQLLexer.T__4 = 5;
SQLLexer.T__5 = 6;
SQLLexer.T__6 = 7;
SQLLexer.T__7 = 8;
SQLLexer.T__8 = 9;
SQLLexer.T__9 = 10;
SQLLexer.T__10 = 11;
SQLLexer.T__11 = 12;
SQLLexer.T__12 = 13;
SQLLexer.T__13 = 14;
SQLLexer.T__14 = 15;
SQLLexer.T__15 = 16;
SQLLexer.T__16 = 17;
SQLLexer.T__17 = 18;
SQLLexer.NUMERIC_LITERAL = 19;
SQLLexer.IDENTIFIER = 20;
SQLLexer.K_CREATE = 21;
SQLLexer.K_ON = 22;
SQLLexer.K_SELECT = 23;
SQLLexer.K_DISTINCT = 24;
SQLLexer.K_FROM = 25;
SQLLexer.K_WHERE = 26;
SQLLexer.K_GROUP = 27;
SQLLexer.K_BY = 28;
SQLLexer.K_HAVING = 29;
SQLLexer.K_INDEX = 30;
SQLLexer.K_ORDER = 31;
SQLLexer.K_LIMIT = 32;
SQLLexer.K_OFFSET = 33;
SQLLexer.K_AS = 34;
SQLLexer.K_ASC = 35;
SQLLexer.K_DESC = 36;
SQLLexer.K_AND = 37;
SQLLexer.K_OR = 38;
SQLLexer.K_COLUMN = 39;
SQLLexer.K_IN = 40;
SQLLexer.K_TABLE = 41;
SQLLexer.K_UNIQUE = 42;
SQLLexer.K_WITH = 43;
SQLLexer.SPACES = 44;

SQLLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

SQLLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

SQLLexer.prototype.literalNames = [ null, "';'", "'('", "')'", "','", "'*'", 
                                    "'.'", "'-'", "'/'", "'%'", "'+'", "'<'", 
                                    "'<='", "'>'", "'>='", "'='", "'=='", 
                                    "'!='", "'<>'" ];

SQLLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                     null, null, null, null, null, null, 
                                     null, null, null, null, null, null, 
                                     null, "NUMERIC_LITERAL", "IDENTIFIER", 
                                     "K_CREATE", "K_ON", "K_SELECT", "K_DISTINCT", 
                                     "K_FROM", "K_WHERE", "K_GROUP", "K_BY", 
                                     "K_HAVING", "K_INDEX", "K_ORDER", "K_LIMIT", 
                                     "K_OFFSET", "K_AS", "K_ASC", "K_DESC", 
                                     "K_AND", "K_OR", "K_COLUMN", "K_IN", 
                                     "K_TABLE", "K_UNIQUE", "K_WITH", "SPACES" ];

SQLLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                 "T__5", "T__6", "T__7", "T__8", "T__9", 
                                 "T__10", "T__11", "T__12", "T__13", "T__14", 
                                 "T__15", "T__16", "T__17", "NUMERIC_LITERAL", 
                                 "IDENTIFIER", "K_CREATE", "K_ON", "K_SELECT", 
                                 "K_DISTINCT", "K_FROM", "K_WHERE", "K_GROUP", 
                                 "K_BY", "K_HAVING", "K_INDEX", "K_ORDER", 
                                 "K_LIMIT", "K_OFFSET", "K_AS", "K_ASC", 
                                 "K_DESC", "K_AND", "K_OR", "K_COLUMN", 
                                 "K_IN", "K_TABLE", "K_UNIQUE", "K_WITH", 
                                 "A", "B", "C", "D", "E", "F", "G", "H", 
                                 "I", "J", "K", "L", "M", "N", "O", "P", 
                                 "Q", "R", "S", "T", "U", "V", "W", "X", 
                                 "Y", "Z", "SPACES" ];

SQLLexer.prototype.grammarFileName = "SQL.g4";



exports.SQLLexer = SQLLexer;
