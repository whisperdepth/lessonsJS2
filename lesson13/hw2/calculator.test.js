import { calc } from "./calculator";

it("should return addition", () => {
  let result = calc("2 + 3");
  expect(result).toEqual("2 + 3 = 5");
});

it("should return subtraction", () => {
  let result = calc("2 - 3");
  expect(result).toEqual("2 - 3 = -1");
});

it("should return multiplication", () => {
  let result = calc("2 * 3");
  expect(result).toEqual("2 * 3 = 6");
});

it("should return division", () => {
  let result = calc("6 / 3");
  expect(result).toEqual("6 / 3 = 2");
});

it("should return null if input is not a string", () => {
  let result = calc(3 - 5);
  expect(result).toEqual(null);
});
