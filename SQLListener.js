// Generated from SQL.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by SQLParser.
function SQLListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SQLListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SQLListener.prototype.constructor = SQLListener;

// Enter a parse tree produced by SQLParser#parse.
SQLListener.prototype.enterParse = function(ctx) {
};

// Exit a parse tree produced by SQLParser#parse.
SQLListener.prototype.exitParse = function(ctx) {
};


// Enter a parse tree produced by SQLParser#statement_list.
SQLListener.prototype.enterStatement_list = function(ctx) {
};

// Exit a parse tree produced by SQLParser#statement_list.
SQLListener.prototype.exitStatement_list = function(ctx) {
};


// Enter a parse tree produced by SQLParser#statement.
SQLListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by SQLParser#statement.
SQLListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by SQLParser#create_index_statemnt.
SQLListener.prototype.enterCreate_index_statemnt = function(ctx) {
};

// Exit a parse tree produced by SQLParser#create_index_statemnt.
SQLListener.prototype.exitCreate_index_statemnt = function(ctx) {
};


// Enter a parse tree produced by SQLParser#select_statement.
SQLListener.prototype.enterSelect_statement = function(ctx) {
};

// Exit a parse tree produced by SQLParser#select_statement.
SQLListener.prototype.exitSelect_statement = function(ctx) {
};


// Enter a parse tree produced by SQLParser#result_column.
SQLListener.prototype.enterResult_column = function(ctx) {
};

// Exit a parse tree produced by SQLParser#result_column.
SQLListener.prototype.exitResult_column = function(ctx) {
};


// Enter a parse tree produced by SQLParser#table_name.
SQLListener.prototype.enterTable_name = function(ctx) {
};

// Exit a parse tree produced by SQLParser#table_name.
SQLListener.prototype.exitTable_name = function(ctx) {
};


// Enter a parse tree produced by SQLParser#ordering_term.
SQLListener.prototype.enterOrdering_term = function(ctx) {
};

// Exit a parse tree produced by SQLParser#ordering_term.
SQLListener.prototype.exitOrdering_term = function(ctx) {
};


// Enter a parse tree produced by SQLParser#column_alias.
SQLListener.prototype.enterColumn_alias = function(ctx) {
};

// Exit a parse tree produced by SQLParser#column_alias.
SQLListener.prototype.exitColumn_alias = function(ctx) {
};


// Enter a parse tree produced by SQLParser#database_name.
SQLListener.prototype.enterDatabase_name = function(ctx) {
};

// Exit a parse tree produced by SQLParser#database_name.
SQLListener.prototype.exitDatabase_name = function(ctx) {
};


// Enter a parse tree produced by SQLParser#index_name.
SQLListener.prototype.enterIndex_name = function(ctx) {
};

// Exit a parse tree produced by SQLParser#index_name.
SQLListener.prototype.exitIndex_name = function(ctx) {
};


// Enter a parse tree produced by SQLParser#indexed_column.
SQLListener.prototype.enterIndexed_column = function(ctx) {
};

// Exit a parse tree produced by SQLParser#indexed_column.
SQLListener.prototype.exitIndexed_column = function(ctx) {
};


// Enter a parse tree produced by SQLParser#column_name.
SQLListener.prototype.enterColumn_name = function(ctx) {
};

// Exit a parse tree produced by SQLParser#column_name.
SQLListener.prototype.exitColumn_name = function(ctx) {
};


// Enter a parse tree produced by SQLParser#table_alias.
SQLListener.prototype.enterTable_alias = function(ctx) {
};

// Exit a parse tree produced by SQLParser#table_alias.
SQLListener.prototype.exitTable_alias = function(ctx) {
};


// Enter a parse tree produced by SQLParser#name.
SQLListener.prototype.enterName = function(ctx) {
};

// Exit a parse tree produced by SQLParser#name.
SQLListener.prototype.exitName = function(ctx) {
};


// Enter a parse tree produced by SQLParser#expr.
SQLListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by SQLParser#expr.
SQLListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by SQLParser#literal_value.
SQLListener.prototype.enterLiteral_value = function(ctx) {
};

// Exit a parse tree produced by SQLParser#literal_value.
SQLListener.prototype.exitLiteral_value = function(ctx) {
};


// Enter a parse tree produced by SQLParser#keyword.
SQLListener.prototype.enterKeyword = function(ctx) {
};

// Exit a parse tree produced by SQLParser#keyword.
SQLListener.prototype.exitKeyword = function(ctx) {
};



exports.SQLListener = SQLListener;