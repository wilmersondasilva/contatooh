
var mongodb = require('mongodb')

var MongoClient = mongodb.MongoClient;

var contacts = [
	{ name: 'xyz1', email: 'xyz1@email.com'},
	{ name: 'xyz2', email: 'xyz2@email.com'},
	{ name: 'xyz3', email: 'xyz3@email.com'}
];

MongoClient.connect('mongodb://locahost:27017/contatooh_test', function(error, db) {
	if (error) throw error;

	db.dropDatabase(function(err) {
		if (err) return console.log(err);
		console.log('Database dropped');
		db.collection('contacts').insert(contacts, function(err, inserted) {
			if (err) return console.log(err);
			console.log('Data inserted in the database with success');
			process.exit(0);
		});
	});
});