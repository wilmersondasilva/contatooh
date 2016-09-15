describe("ContactCtrl", function() {
	var $scope, $httpBackend;
	
	beforeEach(function() {
		module('contatooh');
		inject(function($injector, _$httpBackend_) {
			$scope = $injector.get('$rootScope').$new();
			$httpBackend = _$httpBackend_;
			$httpBackend.when('GET', '/contacts/1').respond({ _id: '1'});
			$httpBackend.when('GET', '/contacts').respond([{}]);
		})
	})

	it("Must create a empty Contact when no parameters of route", inject(function($controller) {
		$controller('ContactCtrl', { "$scope": $scope });
		expect($scope.contact._id).toBeUndefined();
	}));

	it("Must create a valid Contact when parameters of route", inject(function($controller) {
		$controller('ContactCtrl', { 
			"$routeParams": { id: 1 }, 
			"$scope": $scope 
		});
		$httpBackend.flush();
		expect($scope.contact._id).toBeDefined();
	}));
});