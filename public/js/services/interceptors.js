'use strict';
(function() {
	angular
		.module('contatooh')
		.factory('authInterceptor', authInterceptor);

	function authInterceptor($location, $q) {
		var interceptor = {}

		interceptor.responseError = function(response) {
			if (response.status == 401) {
				$location.path('/auth');
			}
			return $q.reject(response);
		};

		return interceptor;
	}
	authInterceptor.$inject = ["$location", "$q"];

})();

