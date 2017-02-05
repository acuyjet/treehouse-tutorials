// Problem: Need a simple way to look at a user's badge count and JavaScript points from a web browser
// Solution: Use Node.js to perform the profile lookups and serve our template via HTTP

// 1. Create a web server
var http = require('http');
http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    setInterval(function(req, res) {
        response.write(new Date() + '\n');
    }, 1000);
    // response.end('Hello World\n');
    // response.write('This is after the end and won\'t appear\n');
}).listen(3000);
console.log('Server running at on port 3000');

// 2. Handle HTTP route GET / and POST / (i.e. home)
// if URL == "/" && GET
// show search field
// if URL == "/" && POST
// redirect to /username

// 3. Handle HTTP route GET /username
// if URL == "/..."
// get JSON from Treehouse
// on "end"
// show profile
// on "error"
// show error

// 4. Function that handles reading files and merges in value
// read from file and get a string
// merge values into string