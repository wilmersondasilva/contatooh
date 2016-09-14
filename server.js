var http = require('http');
var app = require('./config/express')();
var database = require('./config/database');

http.createServer(app).listen(app.get('port'), function() {
	database('mongodb://localhost/contatooh');
	
	console.log('Express server running in the port ' + app.get('port'));
})