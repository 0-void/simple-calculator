const assert = require("chai").assert;

const {
  ADDITION,
  SUBSTRACTION,
  DIVISION,
  MULTIPLICATION,
  POWER,
} = require("../arithmeticOperationTypes");
const { doArithmeticOperation } = require("../index");

describe("check the arithmetic operation function", () => {
  it("check addition of two numbers", () => {
    assert.equal(doArithmeticOperation(10, 20, ADDITION), 30);
  });
  it("check substraction of two numbers", () => {
    assert.equal(doArithmeticOperation(50, 40, SUBSTRACTION), 10);
  });
  it("check multiplication of two numbers", () => {
    assert.equal(doArithmeticOperation(25, 25, MULTIPLICATION), 625);
  });
  it("chekc division of two numbers", () => {
    assert.equal(doArithmeticOperation(40, 20, DIVISION), 2);
  });
  it("check power of two number", () => {
    assert.equal(doArithmeticOperation(2, 3, POWER), 8);
  });
  it("should return null if we didn't pass any action type", () => {
    assert.equal(doArithmeticOperation(1, 0), null);
  });
});
