const {
  ADDITION,
  SUBSTRACTION,
  DIVISION,
  MULTIPLICATION,
  POWER,
} = require("./arithmeticOperationTypes");
const {
  addTwoNumbers,
  substractTwoNumbers,
  divideTwoNumbers,
  multiplyTwoNumbers,
  powerOfaNumber,
} = require("./arithmeticOperations");

const doArithmeticOperation = (number1, number2, arithmeticOperationType) => {
  switch (arithmeticOperationType) {
    case ADDITION:
      return addTwoNumbers(number1, number2);
    case SUBSTRACTION:
      return substractTwoNumbers(number1, number2);
    case MULTIPLICATION:
      return multiplyTwoNumbers(number1, number2);
    case DIVISION:
      return divideTwoNumbers(number1, number2);
    case POWER:
      return powerOfaNumber(number1, number2);
    default:
      return;
  }
};

console.log(doArithmeticOperation(10, 30, ADDITION));

module.exports.doArithmeticOperation = doArithmeticOperation;
