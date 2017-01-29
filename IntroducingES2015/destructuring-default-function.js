'use strict';

function getData({
    url,
    method = 'post'
} = {}, callback) {
    callback(url, method);
}

getData({
    url: 'myposturl.com'
}, function(url, method) {
    console.log(url, method);
});

getData({
    url: 'myputurl.com',
    method: 'put'
}, function(url, method) {
    console.log(url, method);
});