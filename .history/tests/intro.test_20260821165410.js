import { test, it, describe, expect, expectTypeOf } from "vitest";
import { max } from "../src/intro";
import { fizzBuzz, factorial } from "../src/intro";

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
describe("fizzBuzz", () => {
  it(" return fizzbuzz if the mod of that number by 3 and 5 is zero", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it(" return fizz if the mod of that number by 3 is zero", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
  it(" return fizz if the mod of that number by 5 is zero", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });
  it(" convert the input number to a string if it's mod is not zero when divided by 3 or 5", () => {
    expect(fizzBuzz(7)).toBe("7");
  });
});

describe("factorial", () => {
  it("return the factorial of the given number", () => {
    expect(factorial(3).toBe(6));
  });
});
