
function exec(func, arg) {
    func(arg);
}

//exec((something) => {
//    console.log(something);
//}, 'Greetings, everyone!');

window.setTimeout((something) => {
    console.log(something);
}, 3000, 'Greetings, everyone!');