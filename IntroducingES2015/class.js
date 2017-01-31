'use strict';

// class Student {
//     constructor(data) {
//         this.name = data.name;
//         this.age = data.age;
//         this.interestLevel = data.interestLevel || 5        
//     }
// }
// The above, refactored using destructuring to assign default value

class Student {
    constructor({
        name,
        age,
        interestLevel = 5
    }) {
        this.name = name;
        this.age = age;
        this.interestLevel = interestLevel;
        this.grades = new Map();
    }
}

let allison = new Student({
    name: 'Allison',
    age: 37,

});
let paul = new Student({
    name: 'Paul',
    age: 43
});

allison.grades.set('Underwater Basket Weaving', 'A');
allison.grades.set('Interpretive Dance', 'C');

// console.log(allison);
// console.log(paul);

console.log(Array.from(allison.grades));