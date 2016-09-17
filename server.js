var http = require('http');
var app = require('./config/express')();
var database = require('./config/database');
var passport = require('./config/passport');
var config = require('./config/config')();

http.createServer(app).listen(app.get('port'), function() {
	database(config.db);
	passport();
	
	console.log('Express server running in the port ' + app.get('port'));
})