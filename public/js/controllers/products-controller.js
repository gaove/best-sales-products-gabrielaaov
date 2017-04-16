angular.module('app')
	.controller('ProductsController', function($scope, resourceProduct, resourceCartsProducts){

$scope.amount = 0.00;
$scope.maxParcel = 10;
$scope.minParcelValue = 25;
$scope.message= "";

/* LOAD PRODUCTS */
resourceProduct.query(function(products){
	$scope.products = products;
}, function(error){
	console.log(error)
});

/* GET PRODUCT'S IDS (PUSHES TO THE CART'S PRODUCTS IN THE BACK-END)*/
$scope.addToCart = function(product){
		resourceProduct.get({productId : product.id},function(){
		}, function(error){
			console.log(error)
		});
}

/* LOAD CART'S PRODUCTS AND ATTACH EACH PRODUCT'S PRICE TO THE AMOUNT */
resourceCartsProducts.query(function(products){
	$scope.cartsProducts = products;
	var empty = false;
	if($scope.cartsProducts == empty){
		$scope.message = "Seu Carrinho está Vazio"
	}if(!empty)
		angular.forEach($scope.cartsProducts, function(product){
			$scope.amount += product.price;
		});
	}, function(error){
		console.log(error)
});

/* DELETE A PRODUCT FROM THE CART */
$scope.removeFromCart= function(product){
	resourceCartsProducts.delete({productId : product.id}, function(){
		var indiceCartsProduct = $scope.cartsProducts.indexOf(product);
		$scope.cartsProducts.splice(indiceCartsProduct,1);
		$scope.amount -= product.price;
	},function(error){
		console.log(error)
	});

};

/*INSTALLMENT*/
$scope.installment = function(productPrice, productInstallment){
	return productPrice / productInstallment;
}

/*INSTALLMENT PLAN RULES */
	$scope.installmentPlan = function(value){
	if( (value / $scope.minParcelValue) >= $scope.maxParcel){
		$scope.installmentTime = $scope.maxParcel;
		return value / $scope.maxParcel;
	}else if((value / $scope.minParcelValue) < $scope.maxParcel){
		$scope.installmentTime = value/$scope.minParcelValue;
		$scope.installmentTime = Math.floor($scope.installmentTime);
		return value / $scope.installmentTime;
	}
	}

});












