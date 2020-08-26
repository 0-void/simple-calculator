const assert = require("chai").assert;

const {
  addTwoNumbers,
  substractTwoNumbers,
  multiplyTwoNumbers,
  divideTwoNumbers,
  powerOfaNumber,
} = require("../arithmeticOperations");

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
