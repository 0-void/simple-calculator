module.exports.checkIfThePassedValuesAreNumberOrNot = (...numbers) => {
  console.log(arguments);
  return numbers.every((number) => {
    return !Number.isNaN(+number) && number !== "" && number !== null;
  });
};

module.exports.parsePassedValueToNumber = (...numbers) => {
  return numbers.map((number) => +number);
};
