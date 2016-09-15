var ContactsPage = require('./pages/contactsPage');

describe('Contacts list page', function () {
	var page = new ContactsPage();
	
	beforeEach(function() {
		page.visit();
	});

	it('Must be logged', function() {
		page.getLoggedUser()
			.then(function(text) {
				expect(text.trim().length).toBeGreaterThan(0);
			})
	})

	it('Must remove one contact from list', function() {
		var totalBefore = page.getListLength();

		page.removeFirstItemOfList();

		var totalAfter = page.getListLength();

		expect(totalAfter).toBeLessThan(totalBefore);
	})
})