var ContactPage = new require('./pages/contactPage');

describe('Contact detail page', function () {
	var page = new ContactPage();

	beforeEach(function() {
		page.visit();
	});

	it('Must create a contact', function() {
		var random = Math.floor((Math.random() * 10000000) + 1);
		var name = 'teste' + random;
		var email =  'teste@email' + random;
		
		page.typeName(name);
		page.typeEmail(email);
		page.getFirstEmergency();
		page.save();
		expect(page.getMessage()).toContain('Success');
	})
})