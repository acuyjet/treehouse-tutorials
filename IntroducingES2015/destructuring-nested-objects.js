'use strict';

let parentObject = {
    title: 'Super Important',
    childObject: {
        title: 'Equally Important'
    }
}
let {
    title,
    childObject: {
        title: childTitle
    }
} = parentObject;

console.log(childTitle);