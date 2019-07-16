const Ch = require("../dist/ch");

test("sends null to isNumber", () => {
  expect(Ch.isNumber(null)).toBe(false);
});

test("sends true to isNumber", () => {
  expect(Ch.isNumber(true)).toBe(false);
});

test("sends false to isNumber", () => {
  expect(Ch.isNumber(false)).toBe(false);
});

test("sends string to isNumber", () => {
  expect(Ch.isNumber("string")).toBe(false);
});

test("sends integer to isNumber", () => {
  expect(Ch.isNumber(1)).toBe(true);
});

test("sends zero to isNumber", () => {
  expect(Ch.isNumber(0)).toBe(true);
});

test("sends float to isNumber", () => {
  expect(Ch.isNumber(1.1)).toBe(true);
});

test("sends object to isNumber", () => {
  expect(Ch.isNumber({})).toBe(false);
});

test("sends empty array to isNumber", () => {
  expect(Ch.isNumber([])).toBe(false);
});

test("sends array to isNumber", () => {
  expect(Ch.isNumber(["white", "grey", "black"])).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isNumber", () => {
  expect(Ch.isNumber(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isNumber", () => {
  expect(Ch.isNumber(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isNumber", () => {
  expect(Ch.isNumber(node)).toBe(false);
});
