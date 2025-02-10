export default class NumberTransformer {
  constructor(baseNumber = 1, numberChanged = "") {
    this.baseNumber = baseNumber;
    this.numberChanged = numberChanged;
  }

  numberChanger(input) {
    const numberArray = input.toString().split("").map(Number);
    for (let i = 0; i < numberArray.length; i++) {}

    if (parseInt(input) === this.baseNumber) {
      return this.numberChanged;
    }
    return input;
  }
}

//loop through the "input" array and assign the classes to the numbers
//executes logic from each class and concatinate the final string
