'use strict';

class Bird {
    // static changeColor(color) {
    //     this.color = color;
    static changeColor(bird, color) {
        bird.color = color;
    }
    constructor({
        color = 'red'
    } = {}) {
        this.color = color;
    }
}

let redBird = new Bird;
console.log(redBird.color);

// redBird.changeColor('blue'); // 1. Can't do this because static method can't be called on an instance. Can also rewrite static instance as a parameter; see above
Bird.changeColor.call(redBird, 'blue');
console.log(redBird.color);