module.exports = function(app) {
	var controller = app.controllers.contact;
	
	app.route('/contacts')
		.get(controller.listContacts)
		.post(controller.saveContact);
	
	app.route('/contacts/:id')
		.get(controller.getContact)
		.delete(controller.removeContact);
}