exports.config = {
	specs: ['../test/e2e/**/*.js'],
	onPrepare: onPrepare,
};

function onPrepare() {
	browser.driver.get('http://localhost:3000').then(function() {
		browser.driver.findElement(by.id('enter')).click();
		browser.driver.findElement(by.id('login_field')).sendKeys('wilmersondasilva@gmail.com');
		browser.driver.findElement(by.id('password')).sendKeys('aquiles2');
		browser.driver.findElement(by.name('commit')).click();
	});
}