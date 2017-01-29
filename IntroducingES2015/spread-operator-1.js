'use strict';

const originalFlavors = ['Chocolate', 'Vanilla', 'Tomato'];
const newFlavors = ['Strawberry', 'Blue', 'Mint Chocolate Chip'];
const inventory = ['Rocky Road', ...originalFlavors, 'Neopolitan', ...newFlavors];

console.log(inventory);