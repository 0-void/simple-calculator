module.exports.checkIfThePassedValuesAreNumberOrNot = (...numbers) => {
  return numbers.every((number) => {
    return !Number.isNaN(+number) && number !== "" && number !== null;
  });
};

module.exports.parsePassedValueToNumber = (...numbers) => {
  return numbers.map((number) => +number);
};
