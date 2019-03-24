var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it sums a number to the previous total', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    let actual = 5;
    let expected = calculator.runningTotal;
    assert.equal(actual, expected)
  })

});
