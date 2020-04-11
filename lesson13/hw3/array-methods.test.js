import { squareArray, reverseArray, increaseEvenEl, cloneArr } from "./array-methods";

it("should return squared array", () => {
  let result = squareArray([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});

it("should return null if input is not array", () => {
  let result = squareArray(1, 2, 3);
  expect(result).toEqual(null);
});

it("should return reversed array", () => {
  let result = reverseArray([1, 2, 3]);
  expect(result).toEqual([3, 2, 1]);
});

it("should return array with increased evens only", () => {
  let result = increaseEvenEl([1, 2, 3], 1);
  expect(result).toEqual([1, 3, 3]);
});

it("should return null if input is not array", () => {
  let result = increaseEvenEl(3, 1);
  expect(result).toEqual(null);
});

it("should return the same array", () => {
    let result = cloneArr([1, 2, 3]);
    expect(result).toEqual([1, 2, 3]);
});

it("should return null if input is not array", () => {
    let result = cloneArr(1, 2, 3);
    expect(result).toEqual(null);
});


