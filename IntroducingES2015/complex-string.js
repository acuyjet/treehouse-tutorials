'use strict';

let str = 'There are x days until my birthday!';
let birthdayDate = new Date(new Date().getFullYear(), 5, 11);
let complexStr = str.replace('x', dayCount(new Date, birthdayDate));

console.log(complexStr);