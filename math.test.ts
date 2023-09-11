import { expect, test, describe } from "bun:test";

describe("arithmetic", () => {
  test("2 + 2", () => {
    expect(2 + 2).toBe(4);
  });

  test("2 - 2", () => {
    expect(2 - 2).toBe(0);
  });

  test("2 * 2", () => {
    expect(2 * 2).toBe(4);
  });

  test("2 / 2", () => {
    expect(2 / 2).toBe(1);
  });
});
