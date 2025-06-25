import normalizeURL from "./crawl.js";
import { test, expect } from "@jest/globals";

test("normalizeURL", () => {
  const input = "https://blog.boot.dev/path";
  const actual = normalizeURL(input);
  const expected = "blog.boot.dev/path";
  expect(actual).toEqual(expected);
});
