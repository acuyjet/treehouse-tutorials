! function(root) {
    "use strict";

    function Dice(sides) {
        this.sides = sides;
    }

    Dice.prototype.roll = function() {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Dice;
    } else {
        root.Dice = Dice;
    }

}(this);