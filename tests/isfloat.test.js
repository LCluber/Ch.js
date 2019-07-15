const Ch = require("../dist/ch");

test("sends null to isFloat", () => {
  expect(Ch.isFloat(null)).toBe(false);
});

test("sends true to isFloat", () => {
  expect(Ch.isFloat(true)).toBe(false);
});

test("sends false to isFloat", () => {
  expect(Ch.isFloat(false)).toBe(false);
});

test("sends string to isFloat", () => {
  expect(Ch.isFloat("string")).toBe(false);
});

test("sends integer to isFloat", () => {
  expect(Ch.isFloat(1)).toBe(false);
});

test("sends zero to isFloat", () => {
  expect(Ch.isFloat(0)).toBe(false);
});

test("sends float to isFloat", () => {
  expect(Ch.isFloat(1.1)).toBe(true);
});

test("sends object to isFloat", () => {
  expect(Ch.isFloat({})).toBe(false);
});

test("sends empty array to isFloat", () => {
  expect(Ch.isFloat([])).toBe(false);
});

test("sends array to isFloat", () => {
  expect(Ch.isFloat(["white", "grey", "black"])).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isFloat", () => {
  expect(Ch.isFloat(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isFloat", () => {
  expect(Ch.isFloat(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isFloat", () => {
  expect(Ch.isFloat(node)).toBe(false);
});
