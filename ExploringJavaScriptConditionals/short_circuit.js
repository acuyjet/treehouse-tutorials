// 3 === 3 && 'cow' && console.log('chicken');
//
// console.log(3 === 4 || false || 0);

// function isAdult (age) {
//     if (age && age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function isAdult (age) {
//     return (age && age >= 18);
//     }
//     console.log(isAdult(54));

// Can't be used when a valid value is considered falsey: No way to start the countdown from 0 because it's falsey
// and the default value will be used
// function countToFive(start) {
//     start = start || 1;
//     for (var i = start; i <= 5; i++ ) {
//         console.log(i);
//     }
// }
// countToFive(0);

// ECMAScript 2015 solves this problem:
function countToFive(start = 1) {
    for (var i = start; i <= 5; i++ ) {
        console.log(i);
    }
}
countToFive(0);

function greet (name) {
    name && console.log('Hi, ' + name + '!' );
}

greet('Allison');