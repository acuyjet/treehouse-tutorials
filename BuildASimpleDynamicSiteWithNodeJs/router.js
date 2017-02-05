var Profile = require("./profile.js");

// Handle HTTP route GET / and POST / (i.e. home)
function home(req, res) {
    // if URL == "/" && GET
    if (req.url === '/') {
        // show search field
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.write('Header\n');
        res.write('Search\n');
        res.end('Footer\n');
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
        res.write('Header\n');


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
            res.write(values.username + ' has ' + values.badges + ' badges\n');
            res.end('Footer\n');
        });

        // on "error"
        studentProfile.on("error", function(error) {
            // show error
            res.write(error.message + '\n');
            res.end('Footer\n');
        });
    }
}

module.exports.home = home;
module.exports.user = user;