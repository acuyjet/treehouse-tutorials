// Problem:  We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

// Require https module
const https = require('https');

function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
    console.log(message);
};

function getProfile(username) {

    // Connect to the API URL (https://teamtreehouse.com/username.json)
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
        // console.dir(response);
        // console.log(response.statusCode);

        let body = '';

        // Read the data
        response.on('data', data => {
            body += data.toString();
        });

        response.on('end', () => {

            // console.log(body);
            // console.log(typeof body); // Can use typeof to determine variable type

            // Parse the data
            const profile = JSON.parse(body);
            // console.dir(profile);

            // Print the data
            printMessage(username, profile.badges.length, profile.points.JavaScript);
        });
    });
};

// const users = ['allisoncuyjet', 'chalkers', 'davemcfarland'];
const users = process.argv.slice(2);

// users.forEach(username => {
//     getProfile(username);
// }); // Because there's just one parameter, can shorten to the following:
users.forEach(getProfile);