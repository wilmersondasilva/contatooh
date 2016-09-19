var http = require('http');
var app = require('./config/express')();
var database = require('./config/database');
var passport = require('./config/passport');
var config = require('./config/config')();

http.createServer(app).listen(config.port, config.address, function() {
	database(config.db);
	passport();
	
	console.log('Express HTTP Server ' + config.address + ' (' + config.env + ') listening in the port ' + config.port);
})