function checkAuthentication(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	} else {
		res.status('401').json('Unauthorized');
	}
}


module.exports = function(app) {
	var controller = app.controllers.contact;
	
	app.route('/contacts')
		.get(checkAuthentication, controller.listContacts)
		.post(checkAuthentication, controller.saveContact);
	
	app.route('/contacts/:id')
		.get(checkAuthentication, controller.getContact)
		.delete(checkAuthentication, controller.removeContact);
}