'use strict';

function submit(name, comments, rating = 5) {
    // Variable names themselves are used as the property keys
    let data = {
        name,
        comments,
        rating
    };

    for (let key in data) {
        console.log(key + ':', data[key]);
    }

    // Do AJAX request
}

submit('English', 'Booooring!', 1.5);