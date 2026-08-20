var http = require('http');

var a = 10;
var b = 20;
var c = a + b;

// create a server
http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.end('The sum of a and b is: ' + c);

}).listen(3000);

console.log('Server running at http://localhost:3000');