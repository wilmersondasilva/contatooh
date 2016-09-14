module.exports = function(app) {
	var controller = {};
	var Contact = app.models.contact;
	
	controller.listContacts = function(req, res) {
		Contact.find().populate('emergency').exec()
			.then(
				function (contacts) {
					res.json(contacts);
				}, 
				function (error) {
					console.error(error);
					res.status(500).json(error);
				});
	};
	
	controller.getContact = function(req, res) {
		var _id = req.params.id;
		
		Contact.findById(_id).exec()
			.then(
				function (contact) {
					if (!contact) throw new Error('Contact not found.');
					res.json(contact);
				},
				function (error) {
					console.error(error);
					res.status(404).json(error);
				});
	};
	
	controller.saveContact = function(req, res) {
		var contact =  req.body;
		var _id = contact._id;

		contact.emergency = contact.emergency || null;
		
		if (_id) {
			Contact.findByIdAndUpdate(_id, contact).exec()
				.then(
					function (contact) {
						res.json(contact);
					},
					function (error) {
						console.error(error);
						res.status(500).json(error);
					});
		} else {
			Contact.create(req.body)
				.then(
					function (contact) {
						res.status(201).json(contact);
					},
					function (error) {
						console.error(error);
						res.status(500).json(error);						
					}
				);
		}

		res.json(contact);
	};
	
	controller.removeContact = function(req, res) {
		var _id = req.params.id;

		Contact.remove({ "_id": _id }).exec()
			.then(
				function () {
					res.status(204).end();
				},
				function(error) {
					console.error(error);
					res.status(500).json(error);
				});
	}
	
	return controller;
}