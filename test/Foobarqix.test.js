import NumberTransformer from "../src/NumberTransfomer";
import ThreeToFoo from "../src/ThreeToFoo";

describe("FooBarQix", () => {
  test("ThreeToFoo in instance of NumberTransformer", () => {
    const threeToFoo = new ThreeToFoo();

    expect(threeToFoo instanceof NumberTransformer).toBe(true);
  });
});

test("ThreeToFoo should have a number property", () => {
  const threeToFoo = new ThreeToFoo();

  expect(threeToFoo).toHaveProperty("baseNumber");
});

test("ThreeToFoo number should be 3", () => {
  const threeToFoo = new ThreeToFoo();

  expect(threeToFoo.baseNumber).toBe(3);
});

test("Number 3 should be Foo", () => {
  const threeToFoo = new ThreeToFoo();

  expect(threeToFoo.numberChanged).toBe("Foo");
});

test("Number 3 should be Foo", () => {
  const numberTransfomer = new NumberTransformer();
  const text = numberTransfomer.numberChanger(33);
  expect(text).toBe("FooFooFoo");
});
