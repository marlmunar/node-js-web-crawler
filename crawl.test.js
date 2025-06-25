import normalizeURL from "./crawl.js";
import { test, expect } from "@jest/globals";

test("normalizeURL", () => {
  const input = "";
  const actual = normalizeURL(input);
  const expected = "";
  expect(actual).toEqual(expected);
});
