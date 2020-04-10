import {getSquaredArray, getOddNumbers} from "./calculator";

it('should get asquared numbers', () => {
    const result = getSquaredArray([1, 2, 3]);
    expect(result).toEquals([1, 4, 9]);
})