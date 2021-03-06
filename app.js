var portlandiaMonopoly = angular.module('portlandiaMonopoly', ['ui.router']);

portlandiaMonopoly.config(function($stateProvider, $urlRouterProvider) {

	// $stateProvider.state('home', {
	// 	url: "",
	// 	templateUrl: "partials/home.html"
	// });

	$stateProvider.state('home', {
		url: "",
		views:{
			'test':{
				templateUrl: "testFunctions.html",
				// controller: "FunctionCtrl",
			},
			'setup': {
				templateUrl: "partials/selectPlayers.html",
				controller: "PlayerSelectCtrl",
			},
		}
	});
	$stateProvider.state('play',{
		url:"/play",

		views:{					
			'playerStats':{
				templateUrl: "partials/playerStats.html",
				controller: "PlayerStatCtrl"
			},
			'gameBoard':{
				templateUrl: "partials/gameboard.html",
				controller: "PlayerTurnCtrl",
			},
			'playerActions':{
				templateUrl: "partials/playerTurn.html",
				controller: "PlayerTurnCtrl",
			},
		}
	});
});
