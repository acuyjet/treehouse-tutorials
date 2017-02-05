var Profile = require("./profile.js");
var renderer = require('./renderer.js');

// Handle HTTP route GET / and POST / (i.e. home)
function home(req, res) {
    // if URL == "/" && GET
    if (req.url === '/') {
        // show search field
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        renderer.view('header', {}, res);
        renderer.view('search', {}, res);
        renderer.view('footer', {}, res);
        res.end();
    }

    // if URL == "/" && POST
    // redirect to /username
}

// Handle HTTP route GET /username
function user(req, res) {
    // if URL == "/..."
    var username = req.url.replace('/', '');
    if (username.length > 0) {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        renderer.view('header', {}, res);

        // get JSON from Treehouse

        var studentProfile = new Profile(username);

        // on "end"
        studentProfile.on("end", function(profileJSON) {
            // show profile
            // store the values we need
            var values = {
                avatarUrl: profileJSON.gravatar_url,
                username: profileJSON.profile_name,
                badges: profileJSON.badges.length,
                javascriptPoints: profileJSON.points.JavaScript
            }
            // simple response
            renderer.view('profile', values, res);
            renderer.view('footer', {}, res);
            res.end();
        });

        // on "error"
        studentProfile.on("error", function(error) {
            // show error
            renderer.view('error', {
                errorMessage: error.message
            }, res);
            renderer.view('search', {}, res)
            renderer.view('footer', {}, res)
            res.end();
        });
    }
}

module.exports.home = home;
module.exports.user = user;