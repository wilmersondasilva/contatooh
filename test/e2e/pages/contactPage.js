var contactPage = function() {

	this.visit = function() {
		browser.get('http://localhost:3000/#/contact');
	};

	this.typeName = function(name) {
		element(by.model('contact.name')).sendKeys(name);
	};

	this.typeEmail = function(email) {
		element(by.model('contact.email')).sendKeys(email);
	};

	this.save = function() {
		element(by.css('.btn-primary')).click();
	};

	this.getFirstEmergency = function() {
		element(by.css('option')).click();
	}

	this.getMessage = function() {
		return element(by.binding('message.text')).getText()
	};
}

module.exports = contactPage;