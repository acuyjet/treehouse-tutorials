// var chai = require('chai');
// var expect = chai.expect;
var expect = require('chai').expect;

expect(true).to.be.true;

function titleCase(title){
    return title;
}

expect(titleCase('the great mouse detective')).to.be.a('string');