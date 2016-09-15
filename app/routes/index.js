module.exports = function(app) {
	app.get('/', function(req, res) {
		var userLogin;

		if (req.user) {
			userLogin = req.user.login;
		}

		res.render('index', { 'userLogin': userLogin });
	})
}