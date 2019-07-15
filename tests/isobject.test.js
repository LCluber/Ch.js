const Ch = require("../dist/ch");

test("sends null to isObject", () => {
  expect(Ch.isObject(null)).toBe(false);
});

test("sends true to isObject", () => {
  expect(Ch.isObject(true)).toBe(false);
});

test("sends false to isObject", () => {
  expect(Ch.isObject(false)).toBe(false);
});

test("sends string to isObject", () => {
  expect(Ch.isObject("string")).toBe(false);
});

test("sends integer to isObject", () => {
  expect(Ch.isObject(1)).toBe(false);
});

test("sends zero to isObject", () => {
  expect(Ch.isObject(0)).toBe(false);
});

test("sends float to isObject", () => {
  expect(Ch.isObject(1.1)).toBe(false);
});

test("sends object to isObject", () => {
  expect(Ch.isObject({})).toBe(true);
});

test("sends empty array to isObject", () => {
  expect(Ch.isObject([])).toBe(false);
});

test("sends array to isObject", () => {
  expect(Ch.isObject(["white", "grey", "black"])).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isObject", () => {
  expect(Ch.isObject(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isObject", () => {
  expect(Ch.isObject(para)).toBe(true);
});

var node = document.createTextNode("new node");

test("sends node to isObject", () => {
  expect(Ch.isObject(node)).toBe(true);
});
