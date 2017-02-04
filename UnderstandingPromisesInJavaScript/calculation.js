var calculationPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(1 + 1);
    }, 1000);
});

var calculationPromise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(1 + 2);
    }, 500);
});

// calculationPromise.then(function(value) {
//     console.log('The answer is:', value);
//  });

// calculationPromise.then(function(value) {
//     return value + 2;
// }).then(function(nextValue) {
//     console.log('The final value is:', nextValue);
// });

function addTwo(value) {
    return value + 2;
}

function printFinalValue(nextValue) {
    console.log('The final value is:', nextValue);
}

calculationPromise
    .then(addTwo)
    .then(addTwo)
    .then(printFinalValue);

calculationPromise2
    .then(addTwo)
    .then(addTwo)
    .then(printFinalValue);