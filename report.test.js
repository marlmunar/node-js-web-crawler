import { sortPages } from "./report.js";
import { test, expect } from "@jest/globals";

test("sortPages", () => {
  const input = {
    "https://blog.boot.dev/path1": 2,
    "https://blog.boot.dev/path2": 9,
    "https://blog.boot.dev/path3": 5,
    "https://blog.boot.dev/path4": 7,
    "https://blog.boot.dev/path5": 1,
  };
  const actual = sortPages(input);
  const expected = [
    ["https://blog.boot.dev/path2", 9],
    ["https://blog.boot.dev/path4", 7],
    ["https://blog.boot.dev/path3", 5],
    ["https://blog.boot.dev/path1", 2],
    ["https://blog.boot.dev/path5", 1],
  ];
  expect(actual).toEqual(expected);
});
