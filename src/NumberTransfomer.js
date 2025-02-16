export default class NumberTransformer {
  constructor() {
    this.transformedNumbers = "";
    this.isDivisible = false;
  }

  numberChanger(input) {
    this.transformedNumbers = "";
    this.isDivisible = false;
    if (Number.isInteger(parseInt(input) / 3)) {
      this.transformedNumbers += "Foo";
      this.isDivisible = true;
    }
    if (Number.isInteger(parseInt(input) / 5)) {
      this.transformedNumbers += "Bar";
      this.isDivisible = true;
    }
    if (Number.isInteger(parseInt(input) / 7)) {
      this.transformedNumbers += "Qix";
      this.isDivisible = true;
    }

    const numberArray = input.toString().split("").map(Number);
    numberArray.map((n) => {
      if (n === 3) {
        this.transformedNumbers += "Foo";
      } else if (n === 5) {
        this.transformedNumbers += "Bar";
      } else if (n === 7) {
        this.transformedNumbers += "Qix";
      } else if (n === 0) {
        this.transformedNumbers += "*";
      } else if (!this.isDivisible) {
        this.transformedNumbers += n;
      }
    });
    return this.transformedNumbers;
  }
}
