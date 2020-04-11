import { getSum, increaser, compareSums } from "./functions-basics";

it("should get sum of even numbers", () => {
  let result = getSum(2, 6);
  expect(result).toEqual(12);
});

it("should return increased number", () => {
  let result = increaser(2, 1);
  expect(result).toEqual(3);
});

it("should return not increased number", () => {
  let result = increaser(1, 2);
  expect(result).toEqual(1);
});

it("should return true if sum 1 is bigger", () => {
    let result = compareSums (5, 9, 2, 4);
    expect(result).toEqual(true);
})

it("should return false if sum 2 is bigger", () => {
    let result = compareSums (1, 4, 2, 7);
    expect(result).toEqual(false);
})
