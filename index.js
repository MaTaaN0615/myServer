var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));

app.get('/api/book', function(req, res){
	var books = [
		{title: 'Angular',author: 'NUTCHA', price: 800},
		{title: 'Node.js',author: 'NATTY' , price: 600},
		{title: 'CSS' ,author: 'NOTCY', price: 500},

	];
	res.send(books);
})

var server = app.listen(3000, function () {
	console.log("server is running")

})