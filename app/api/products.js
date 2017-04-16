var api = {};
var data = require('../../public/data/products.json');
var products = data.products;
var cartsProducts = [];

/*
Response the products data.
*/
api.products = function(req,res){
	res.json(products);
};

/*
Search in products the product id that matches to the requested and return it, 
then pushes it to the cartsProducts and response the product id itself. 
*/
api.productId = function(req,res){
	var product = products.find(function(product){
		return product.id == req.params.id;
	});
	cartsProducts.push(product);
	res.json(product);
};

/*Response the cart's products.*/
api.cartsProducts = function(req,res){
	res.json(cartsProducts);
};

/* 
Search in cartsProducts the product id that matches to the requested and return it,
then response the product id.
*/
api.productCartId = function(req,res){
	var cartsProduct = cartsProducts.find(function(cartsProduct){
		return cartsProduct.id == req.params.id;
	});
	res.json(cartsProduct);
};

/*
Filter the cartsProducts and return all the products that doesn't matches to the requested id,
then response with 204.
*/
api.removeCartId = function(req,res){
	cartsProducts = cartsProducts.filter(function(cartsProduct){
		return cartsProduct.id != req.params.id;
	});
	res.sendStatus(204);
};

module.exports = api;







































































