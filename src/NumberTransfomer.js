export default class NumberTransformer {
  constructor() {
    this.transformedNumbers = "";
  }

  numberChanger(input) {
    if (Number.isInteger(parseInt(input) / 3)) {
      this.transformedNumbers += "Foo";
    }
    if (Number.isInteger(parseInt(input) / 5)) {
      this.transformedNumbers += "Bar";
    }
    if (Number.isInteger(parseInt(input) / 7)) {
      this.transformedNumbers += "Qix";
    }
    const numberArray = input.toString().split("").map(Number);
    numberArray.map((n) => {
      if (n === 3) {
        this.transformedNumbers += "Foo";
      }
      if (n === 5) {
        this.transformedNumbers += "Bar";
      }
      if (n === 7) {
        this.transformedNumbers += "Qix";
      }
    });
    if (this.transformedNumbers === "") {
      return input;
    }
    return this.transformedNumbers;
  }
}
