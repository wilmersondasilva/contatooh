'use strict';
(function() {
	angular
		.module('contatooh')
		.controller('ContactsCtrl', ContactsCtrl);

	function ContactsCtrl($scope, Contact) {
		getContacts();

		$scope.remove = function (contact) {
			Contact.delete(
				{ id: contact._id },
				getContacts,
				function (error) {
					// message from user about error
					console.log(error);
				})
		}

		function getContacts() {
			Contact.query(
				function (contacts) {
					$scope.contacts = contacts;
				},
				function (error) {
					console.log(erro);
					// message from user about error
				}
			)
		}
	}

})();

