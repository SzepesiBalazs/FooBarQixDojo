export default class NumberTransformer {
  constructor(baseNumber = 1, numberChanged = "") {
    this.baseNumber = baseNumber;
    this.numberChanged = numberChanged;
  }
  
  numberChanger(input) {
    if (parseInt(input) === this.baseNumber) {
      return this.numberChanged; 
    }
    return input; 
  }
}
