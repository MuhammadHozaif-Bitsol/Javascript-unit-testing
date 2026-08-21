import { test, it, describe, expect } from "vitest";
import { max } from "../src/intro";
import { fizzBuzz } from "../src/intro";
describe("max", () => {
  it("should return the first argument if it is greater than the second one", () => {
    expect(max(2, 1)).toBe(2);
  });
  it("should return the second argument if it is greater than the first one", () => {
    expect(max(1, 2)).toBe(2);
  });
  it("should return the first argument if arguments are equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});
