'use strict'

function greet(name = 'Allison', timeOfDay = 'afternoon') {
    // name = name || 'Allison';
    // timeOfDay = timeOfDay || 'afternoon';
    console.log(`Good ${timeOfDay}, ${name}!`);
}

greet(undefined, 'morning');