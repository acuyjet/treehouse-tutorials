'use strict';
let teachers = [{
    name: 'Ken',
    comments: 'Amazing!',
    rating: 4
}, {
    name: 'James',
    comments: 'Awful!',
    rating: 1
}, {
    name: 'Dave',
    comments: 'Astounding!',
    rating: 4.5
}, {
    name: 'John',
    comments: 'Atrocious!',
    rating: 0.8
}, {
    name: 'Andrew',
    comments: 'Adequate!',
    rating: 3
}, {
    name: 'Elizabeth',
    comments: 'Astonishing!',
    rating: 5
}, {
    name: 'Nick',
    comments: 'Automotive!',
    rating: 3
}, {
    name: 'Sarah',
    comments: 'Allegorical!',
    rating: 4
}, {
    name: 'Alena',
    comments: 'Affable!',
    rating: 4.5
}, ];

// teachers.forEach(teacher => {
//     console.log(teacher.name);
//     if (teacher.name === 'Nick') {
//         console.log(teacher.rating);
//     }
// })

// 'for...of' loop can't be used with regular objects; would have to use 'for...in' instead
for (let teacher of teachers) {
    console.log(teacher.name);
    if (teacher.name === 'Nick') {
        console.log(teacher.rating);
        break;
    }
};