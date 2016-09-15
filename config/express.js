var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var helmet = require('helmet');

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

	app.use(cookieParser());
	app.use(session({
		secret: 'pink floyd',
		resave: true,
		saveUninitialized: true
	}));
	app.use(passport.initialize());
	app.use(passport.session());

	app.use(helmet());
	//app.use(helmet.hidePoweredBy({ setTo: 'PHP 5.5.14' }));
	//app.use(helmet.xframe());
	//app.use(helmet.xssFilter());
	//app.use(helmet.nosniff());

	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);

	//404 route
	app.get('*', function(req, res) {
		res.status(404).render('404');
	})

	return app;
};
