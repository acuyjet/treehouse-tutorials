'use strict';

// Constructor function; compare to class.js
let Student = function(data) {
    this.name = data.name;
    this.age = data.age;
}

let allison = new Student({
    name: 'Allison',
    age: 37
});
let paul = new Student({
    name: 'Paul',
    age: 43
});

console.log(allison);
console.log(paul);