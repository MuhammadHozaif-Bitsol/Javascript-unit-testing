import { test, it, describe, expect } from "vitest";
describe("max", () => {
  it("should return the first argument if it is greater than the second one", () => {
    expect(max(2, 1)).toBe(2);
  });
});
