var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));

app.get('/api/book', function(req, res){
	var books = [
		{title: 'Angular',author: 'NUTCHA', price: 800 ,img:'img/angular.jpg'},
		{title: 'Node.js',author: 'NATTY' , price: 600,img:'img/node.jpg'},
		{title: 'CSS' ,author: 'NOTCY', price: 500,img:'img/css.jpg'},
	];
	res.send(books);
})

var server = app.listen(3000, function () {
	console.log("server is running")

})