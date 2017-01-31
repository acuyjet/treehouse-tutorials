var Portland = {
    bridges: 12,
    airport: 1,
    soccerTeams: 1,
    logNumberOfBridges: function() {
        console.log("There are " + this.bridges + " bridges in Portland!")
    }
}

function logTeams() {
    console.log(this);
}

Portland.foo = logTeams;

Portland.foo();
logTeams();