export default class NumberTransformer {
  constructor() {
    this.transformedNumbers = "";
  }

  numberChanger(input) {
    if (Number.isInteger(parseInt(input) / 3)) {
      this.transformedNumbers += "Foo";
    }
    const numberArray = input.toString().split("").map(Number);
    numberArray.map((n) => {
      if (n === 3) {
        this.transformedNumbers += "Foo";
      }
    });
    if (this.transformedNumbers === "") {
      return input;
    }
    return this.transformedNumbers;
  }
}
