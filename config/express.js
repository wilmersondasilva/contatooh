var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

module.exports = function() {
	var app = express();

	// Environment variables
	app.set('port', 3000);
	app.set('view engine', 'pug');
	app.set('views', './app/views');

	app.use(bodyParser.urlencoded({ extended: true}));
	app.use(bodyParser.json());
	app.use(methodOverride());
	
	app.use(express.static('./public'));

	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);

	return app;
};
