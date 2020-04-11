import getMinSquaredNumber from "./getMinAquaredNumber";


it("should return null if array is empty", () => {
  let result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it("should return null for string", () => {
  let result = getMinSquaredNumber('abc');
  expect(result).toEqual(null)
u});

it("should return min squared number", () => {
  let result = getMinSquaredNumber([-2, 2, 45, 5]);
  expect(result).toEqual(4);
});
