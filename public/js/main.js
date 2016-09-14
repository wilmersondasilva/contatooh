'use strict';
(function() {
	angular
		.module('contatooh', ['ngRoute', 'ngResource'])
		.config(config);

	function config($routeProvider) {
		
		$routeProvider
			.when('/contacts', {
				templateUrl: 'partials/contacts.html',
				controller: 'ContactsCtrl'
			})
			.when('/contact/:id', {
				templateUrl: 'partials/contact.html',
				controller: 'ContactCtrl'
			})
			.when('/contact/', {
				templateUrl: 'partials/contact.html',
				controller: 'ContactCtrl'
			})
			.otherwise({redirectTo: '/contacts'});


	}
})();