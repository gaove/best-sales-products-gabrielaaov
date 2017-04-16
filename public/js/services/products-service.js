angular.module('productServices', ['ngResource'])
.factory('resourceProduct', function($resource){
	return $resource('data/products/:productId');
})
.factory('resourceCartsProducts', function($resource){
	return $resource('data/cart/:productId');
});


