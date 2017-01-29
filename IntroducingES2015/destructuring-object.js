'use strict';

let toybox = {
    item1: 'car',
    item2: 'ball',
    item3: 'toy soldier'
};
let {
    item3: frisbee
} = toybox;

console.log(frisbee);