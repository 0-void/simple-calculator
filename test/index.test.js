const assert = require("chai").assert;

const {
  ADDITION,
  SUBSTRACTION,
  DIVISION,
  MULTIPLICATION,
  POWER,
} = require("../arithmeticOperationTypes");
const {
  addTwoNumbers,
  substractTwoNumbers,
  multiplyTwoNumbers,
  divideTwoNumbers,
  powerOfaNumber,
} = require("../arithmeticOperations");
const { doArithmeticOperation } = require("../index");

describe("check addition of two numbers", function() {
  //second test case solves this one. This test case can be removed
  it("should throws an error if the addition of two numbers function cannot be called", function() {
    addTwoNumbers();
  });

  it("should throw an error if the addtion of two numbers is wrong", function() {
    assert.equal(addTwoNumbers(15, 5), 20);
  });
});

describe("check substraction of two numbers", function() {
  it("should throws an error if the substraction of two numbers is wrong", function() {
    assert.equal(substractTwoNumbers(20, 10), 10);
  });
});

describe("check multiplication of two numbers", function() {
  it("should throws an error if the multiplication of two number is wrong", function() {
    assert.equal(multiplyTwoNumbers(3, 8), 24);
  });
});

describe("check division of two numbers", function() {
  it("should throws an error if the division of two numbers is wrong", function() {
    assert.equal(divideTwoNumbers(100, 10), 10);
  });
});

describe("check power of the two numbers", function() {
  it("should throws an error if power of two number is wrong", function() {
    assert.equal(powerOfaNumber(3, 3), 27);
  });
});

describe("check the arithmetic operation function", function() {
  it("check addition of two numbers", function() {
    assert.equal(doArithmeticOperation(10, 20, ADDITION), 30);
  });
  it("check substraction of two numbers", function() {
    assert.equal(doArithmeticOperation(50, 40, SUBSTRACTION), 10);
  });
  it("check multiplication of two numbers", function() {
    assert.equal(doArithmeticOperation(25, 25, MULTIPLICATION), 625);
  });
  it("chekc division of two numbers", function() {
    assert.equal(doArithmeticOperation(40, 20, DIVISION), 2);
  });
  it("check power of two number", function() {
    assert.equal(doArithmeticOperation(2, 3, POWER), 8);
  });
  it("should return null if we didn't pass any action type", function() {
    assert.equal(doArithmeticOperation(1, 0), null);
  });
});
