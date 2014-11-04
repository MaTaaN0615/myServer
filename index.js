var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));

app.get('/api/book', function(req, res){
	var books = [
		{title: 'Angular',artist: 'NUTCHA', price: 800},
		{title: 'Node.js',artist: 'NATTY' , price: 600},
		{title: 'CSS' ,artist: 'NOTCY', price: 500},

	];
	res.send(books);
})

var server = app.listen(3000, function () {
	console.log("server is running")

})