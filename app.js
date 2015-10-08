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
			'gameBoard':{
				templateUrl: "partials/gameboard.html",
				controller: "GameBoardCtrl",
			},
			'playerActions':{
				templateUrl: "partials/playerTurn.html",
				controller: "PlayerTurnCtrl",
			},
		}			
	});
});
