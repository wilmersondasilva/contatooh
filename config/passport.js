var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');
var config = require('./config')();

module.exports = function() {

	var User = mongoose.model('User');
	
	var gitHubConfig = {
		clientID: config.clientID,
		clientSecret: config.clientSecret,
		callbackURL: 'http://localhost:3000/auth/github/callback'
	}

	function gitHubCallback (accessToken, refreshToken, profile, done) {
		User.findOrCreate(
			{ "login": profile.username },
			{ "name": profile.username },
			function (error, user) {
				if (error) {
					console.error(error);
					return done(error);
				}
				return done(null, user);
			}
		)
	}

	passport.use(new GitHubStrategy(gitHubConfig, gitHubCallback));

	passport.serializeUser(function (user, done) {
		done(null, user._id);
	});

	passport.deserializeUser(function (id, done) {
		User.findById(id).exec()
			.then(function(user) {
				done(null, user);
			});
	});
};