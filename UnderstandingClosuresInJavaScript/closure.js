var birds = 3;

function dogHouse() {
    var dogs = 8;

    function showDogs() {
        console.log(dogs);
    }
    return showDogs;
}

var getDogs = dogHouse();

getDogs(); // 8