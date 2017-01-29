'use strict';

let student = {
    name: 'Jen'
};

(function() {

    function createStudent(name) {
        student = {
            name: name
        };
        return student;
    };

    console.log(createStudent('Kathy'));
    console.log(student);
})();