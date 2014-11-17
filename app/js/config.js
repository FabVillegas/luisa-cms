angular.module('proyectoLuisa', ['ui.router', 'firebase']).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('first');
	$stateProvider.
	state('first', {
		url: '/first',
		templateUrl: 'views/firstTemplate.html',
		controller: 'firstCtrl'
	}).
	state('second', {
		url: '/second',
		templateUrl: 'views/secondTemplate.html',
		controller: 'secondCtrl'
	});
}]);


var isLoggedIn = function($firebaseSimpleLogin, $state, firebaseRefFactory){
	var dataRef = new Firebase(firebaseRefFactory.getRef());
	var loginObj = $firebaseSimpleLogin(dataRef);
	loginObj.$getCurrentUser().then(function(user){// this returns a promise
		if(user){
			console.log('Logged in as:');
			console.log(loginObj.$getCurrentUser());
			return;
		}
		else{
			// send user to login state/route
			$state.go('login');
		}
	});
};
