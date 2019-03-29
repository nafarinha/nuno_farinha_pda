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
//unit tests
  it('should sum a number to the previous total', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    let actual = 5;
    let expected = calculator.runningTotal;
    assert.equal(actual, expected);
  })

  it('should subtract a number from the previous total', function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    let actual = 3;
    let expected = calculator.runningTotal;
    assert.equal(actual, expected);
  })

  it('should multiply a number with the previous total', function() {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    let actual = 15;
    let expected = calculator.runningTotal;
    assert.equal(actual, expected);
  })

  it('should divide the previous total with a number', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    let actual = 3;
    let expected = calculator.runningTotal;
    assert.equal(actual, expected);
  })
// integration tests
  it('should concatenate multiple number button clicks', function() {
    calculator.numberClick(1);
    calculator.numberClick(1);
    let actual = 11;
    assert.equal(actual, calculator.runningTotal)
  })

  it('should chain multiple operations together', function() {
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.operatorClick('+');
    let actual = 4;
    assert.equal(actual, calculator.runningTotal);
  })

  // it('should clear the running total without affecting the calculation', function() {
  //   calculator.numberClick(1);
  //   calculator.add(1);
  //   calculator.clearClick();
  //   assert.equal(2, calculator.runningTotal);
  // })
});
