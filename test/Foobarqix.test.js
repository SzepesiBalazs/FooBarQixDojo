import NumberTransformer from "../src/NumberTransfomer";
import ThreeToFoo from "../src/Three";

describe("FooBarQix", () => {
  test("Number 9 should be Foo", () => {
    const numberTransfomer = new NumberTransformer();
    const text = numberTransfomer.numberChanger(9);
    expect(text).toBe("Foo");
  });

  test("Number 3 should be FooFoo", () => {
    const numberTransfomer = new NumberTransformer();
    const text = numberTransfomer.numberChanger(3);
    expect(text).toBe("FooFoo");
  });

  test("Number 33 should be FooFooFoo", () => {
    const numberTransfomer = new NumberTransformer();
    const text = numberTransfomer.numberChanger(33);
    expect(text).toBe("FooFooFoo");
  });

  test("Number 1 should be 1", () => {
    const numberTransfomer = new NumberTransformer();
    const text = numberTransfomer.numberChanger(1);
    expect(text).toBe(1);
  });

  test("Number 36 should be FooFoo", () => {
    const numberTransfomer = new NumberTransformer();
    const text = numberTransfomer.numberChanger(36);
    expect(text).toBe("FooFoo");
  });
});
