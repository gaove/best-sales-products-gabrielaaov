var path = require('path');

module.exports = function(app){
	var api = app.api.products;

	//get products
	app.route('/data/products')
			.get(api.products);

	//get product id
	app.route('/data/products/:id')
		.get(api.productId),

	//get cart's products
	app.route('/data/cart')
		.get(api.cartsProducts);

	//get cart's product id
	//delete cart's product id
	app.route('/data/cart/:id')
		.get(api.productCartId)
		.delete(api.removeCartId);


	//enable HTML5MODE
  app.all('/*', function(req, res) {
      res.sendFile(path.resolve('public/index.html'));
  });

};
