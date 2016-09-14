'use strict';
(function() {
	angular
		.module('contatooh')
		.factory('Contact', Contact);

	function Contact($resource) {
		return $resource('/contacts/:id');
	}

})();

