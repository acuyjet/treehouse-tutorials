'use strict';

class Person {
    dance() {
        const dances = ['waltz', 'tango', 'mambo', 'foxtrot'];
        console.log(`${this.name} is doing the ${dances[Math.floor(Math.random() * dances.length)]}!`);
    }
    constructor({
        name,
        age,
        eyeColor = 'brown'
    } = {}) {
        this.name = name;
        this.age = age;
        this.eyeColor = eyeColor;
    }
}

class Student extends Person {
    dance(traditional) {
        if (traditional) {
            super.dance();
            return;
        }
        const dances = ['Cupid Shuffle', 'Electric Slide', 'dougie', 'hippie twirl'];
        console.log(`${this.name} is doing the ${dances[Math.floor(Math.random() * dances.length)]}!`);
    }
    constructor({
        name,
        age,
        interestLevel = 5
    }) {
        //Have to include super() in child class before an reference to the instance of the parent class
        super({
            name,
            age
        });
        this.name = name;
        this.age = age;
        this.interestLevel = interestLevel;
        this.grades = new Map();
    }
}

let allison = new Student({
    name: 'Allison',
    age: 37,
    interestLevel: 3
});
allison.dance(false);
console.log(allison.interestLevel);