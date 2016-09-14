'use strict';
(function() {
	angular
		.module('contatooh')
		.controller('ContactCtrl', ContactCtrl);


	function ContactCtrl($scope, $routeParams, Contact) {
		if ($routeParams.id) {
			Contact.get(
				{ id: $routeParams.id },
				function (contact) {
					$scope.contact = contact;
				},
				function (error) {
					console.log(error);
				}
			);	
		} else {
			$scope.contact = new Contact();
		}
		
		Contact.query(function(contacts) {
			$scope.contacts = contacts;
		});

		$scope.save = function () {
			console.log($scope.contact);
			$scope.contact.$save()
				.then(function() {
					$scope.contact = new Contact();
				});
		}
	}

})();

