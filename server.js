var http = require('http');
var app = require('./config/express')();
var database = require('./config/database');
var passport = require('./config/passport');

http.createServer(app).listen(app.get('port'), function() {
	database('mongodb://localhost/contatooh');
	passport();
	
	console.log('Express server running in the port ' + app.get('port'));
})