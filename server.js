var http = require('http');
var app = require('./config/express.js');
var port = 3000;

http.createServer(app).listen(port,function(){
	console.log('Server is running on port ' + port);
});