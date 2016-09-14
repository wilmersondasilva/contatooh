var mongoose =  require('mongoose');

module.exports = function(uri) {
	mongoose.connect(uri);

	mongoose.set('debug', true);

	mongoose.connection.on('connected', function() {
		console.log('DB connected in ' + uri);
	});

	mongoose.connection.on('disconnected', function() {
		console.log('DB disconnected in ' + uri);
	});

	mongoose.connection.on('error', function() {
		console.log('Error in the DB connection ' + uri);
	});

	process.on('SIGINT', function () {
		mongoose.connection.close(function() {
			console.log('DB disconnected');

			process.exit(0);
		})
	})
}