'use strict';

class Student {
    get name() {
        return `${this.firstName} ${this.lastName}`;
    }

    set name(input) {
        let name = input.split(' ');
        this.firstName = name[0];
        this.lastName = name[1];
    }

    constructor({
        firstName,
        lastName,
        age,
        interestLevel = 5
    } = {}) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.interestLevel = interestLevel;
    }
}

let allison = new Student({
    firstName: 'Allison',
    lastName: 'Cuyjet',
    age: 37
});

console.log(allison.name);
allison.name = "Tia Mowry";
console.log(allison.name);