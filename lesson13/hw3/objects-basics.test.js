import {
  addPropertyV1,
  addPropertyV2,
  addPropertyV3,
  addPropertyV4,
} from "./objects-basics";

it("should add id to object", () => {
  let result = addPropertyV1({ name: "a" }, "1");
  expect(result).toEqual({ name: "a", id: "1" });
});

it("should add id to object", () => {
  let result = addPropertyV2({ name: "a" }, "1");
  expect(result).toEqual({ name: "a", id: "1" });
});

it("should add id to object", () => {
  let result = addPropertyV3({ name: "a" }, "1");
  expect(result).toEqual({ name: "a", id: "1" });
});

it("should add id to object", () => {
  let result = addPropertyV4({ name: "a" }, "1");
  expect(result).toEqual({ name: "a", id: "1" });
});
