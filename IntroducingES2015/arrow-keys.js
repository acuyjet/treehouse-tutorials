'use strict'

var Person = function(data) {
    for (var key in data) {
        this[key] = data[key];
    };
    this.getKeys = () => {
        return Object.keys(this);
    };
};

var Allison = new Person({
    name: 'Allison',
    role: 'Student'
});

console.log('Allison\'s Keys:', Allison.getKeys()); // 'this' refers to 'Allison'

var getKeys = Allison.getKeys;

console.log(getKeys()); // 'this' refers to 'Allison'