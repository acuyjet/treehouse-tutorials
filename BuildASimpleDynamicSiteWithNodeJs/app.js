// Problem: Need a simple way to look at a user's badge count and JavaScript points from a web browser
// Solution: Use Node.js to perform the profile lookups and serve our template via HTTP

var router = require('./router.js');
// Create a web server
var http = require('http');
http.createServer(function(req, res) {
    router.home(req, res);
    router.user(req, res);
}).listen(3000);
console.log('Server running at on port 3000');