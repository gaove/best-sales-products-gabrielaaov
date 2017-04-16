angular.module('app',['ngRoute', 'productServices'])
	.config(function($routeProvider, $locationProvider){

		$locationProvider.html5Mode(true);

		$routeProvider.when('/produtos',{
			templateUrl: 'views/products.html',
			controller: 'ProductsController'
		});

		$routeProvider.when('/meu-carrinho',{
			templateUrl: 'views/cart.html',
			controller: 'ProductsController'
		});

		$routeProvider.otherwise({ redirectTo:'/produtos'});

});