'use strict';

let classroom = new Set();
let allison = {
        name: 'Allison',
        age: 37
    },
    paul = {
        name: 'Paul',
        age: 43
    },
    otherPaul = {
        name: 'Paul',
        age: 43
    };

// otherPaul = paul;

// A set must have unique values, so here classroom.size is still 3
classroom.add(allison);
classroom.add(paul);
classroom.add(otherPaul);
classroom.add(allison);

if (classroom.has(paul)) console.log('Paul is in the classroom');
if (classroom.has(allison)) console.log('Allison is in the classroom');
if (classroom.has(otherPaul)) console.log('Other Paul is in the classroom');

// .size is similar to .length, but for sets
console.log(`Classroom size: ${classroom.size}`);

classroom.delete(otherPaul);
console.log(`Classroom size: ${classroom.size}`);

// Create an array of students from the classroom set
let arrayofStudents = Array.from(classroom);
console.log(arrayofStudents);

// Create a set from an existing array
let alumni = new Set(arrayofStudents);
console.log(`Alumni size: ${alumni.size}`);