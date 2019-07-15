const Ch = require("../dist/ch");

test("sends null to isInteger", () => {
  expect(Ch.isInteger(null)).toBe(false);
});

test("sends string to isInteger", () => {
  expect(Ch.isInteger("string")).toBe(false);
});

test("sends false to isInteger", () => {
  expect(Ch.isInteger(false)).toBe(false);
});

test("sends true to isInteger", () => {
  expect(Ch.isInteger(true)).toBe(false);
});

test("sends integer to isInteger", () => {
  expect(Ch.isInteger(1)).toBe(true);
});

test("sends zero to isInteger", () => {
  expect(Ch.isInteger(0)).toBe(true);
});

test("sends float to isInteger", () => {
  expect(Ch.isInteger(1.1)).toBe(false);
});

test("sends object to isInteger", () => {
  expect(Ch.isInteger({})).toBe(false);
});

test("sends empty array to isInteger", () => {
  expect(Ch.isInteger([])).toBe(false);
});

test("sends array to isInteger", () => {
  expect(Ch.isInteger(["white", "grey", "black"])).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isInteger", () => {
  expect(Ch.isInteger(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isInteger", () => {
  expect(Ch.isInteger(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isInteger", () => {
  expect(Ch.isInteger(node)).toBe(false);
});
