import NumberTransformer from "./NumberTransfomer";

export default class ThreeToFoo extends NumberTransformer {
  constructor(baseNumber = 3, numberChanged = "Foo") {
    super(baseNumber, numberChanged);
  }
}
