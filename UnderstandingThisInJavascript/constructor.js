var City = function(name, state) {
    this.name = name || 'Louisville';
    this.state = state || 'Kentucky';
    this.printMyCityAndState = function() {
        console.log("My city is " + this.name + ", and my state is " + this.state);
    };
};

louisville = new City();
seattle = new City('Seattle', 'Washington');
salem = new City('Lexington');
vancouver = new City('Vancouver', 'Washington');

louisville.printMyCityAndState();
seattle.printMyCityAndState();
salem.printMyCityAndState();
vancouver.printMyCityAndState();

console.log(louisville);
console.log(seattle);