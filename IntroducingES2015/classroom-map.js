'use strict';

let classroom = new Map();

let stevenJ = {
        name: 'Steven',
        age: 22
    },
    sarah = {
        name: 'Sarah',
        age: 23
    },
    stevenS = {
        name: 'Steven',
        age: 22
    };

classroom.set('stevenJ', stevenJ);
classroom.set('sarah', sarah);
classroom.set('stevenS', stevenS);

// console.log(`Classroom size: ${classroom.size}`);

// .clear empties the object without destroying the object in memory
// classroom.clear();
// console.log(`Classroom size: ${classroom.size}`);

// if (classroom.has('stevenJ')) {
//     console.log('stevenJ is in the classroom');
// };
// if (classroom.has('sarah')) {
//     console.log('sarah is in the classroom');
// };
// if (classroom.has('stevenS')) {
//     console.log('stevenS is in the classroom');
// };

// classroom.delete('sarah');
// console.log('sarah:', classroom.get('sarah'));

for (let student of classroom) {
    console.log(`'${student[0]}': ${student[1].name} is ${student[1].age} years old.`);
}