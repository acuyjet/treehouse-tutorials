// +function (underscore) {
//     // function foo() {
//     //     console.log('foobar');
//     // };
//     // foo();

//     underscore.somemethod = 'Yay!';
//     console.log(underscore.VERSION);
// }(_);

var newModule.sub = (function(exports) {
    var exports = {
        foo: 5,
        bar: 10
    };
    exports.helloMars = function() {
        console.log('Hello, Mars!');
    };
    exports.goodbyeMars = function() {
        console.log('Goodbye, Mars!');
    };
    return exports
}(newModule.sub || {}));