import { test, it, describe, expect } from "vitest";
describe("max", () => {
  it("should return the first argument if it is greater than the second one", () => {
    //arrange
    const a = 2;
    const b = 1;
    //Act
    const result = max(a, b);
    //Assert
    expect(result).toBe(2);
  });
});
