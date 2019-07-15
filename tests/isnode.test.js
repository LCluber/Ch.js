const Ch = require("../dist/ch");

test("sends null to isNode", () => {
  expect(Ch.isNode(null)).toBe(false);
});

test("sends string to isNode", () => {
  expect(Ch.isNode("string")).toBe(false);
});

test("sends false to isNode", () => {
  expect(Ch.isNode(false)).toBe(false);
});

test("sends true to isNode", () => {
  expect(Ch.isNode(true)).toBe(false);
});

test("sends integer to isNode", () => {
  expect(Ch.isNode(1)).toBe(false);
});

test("sends zero to isNode", () => {
  expect(Ch.isNode(0)).toBe(false);
});

test("sends float to isNode", () => {
  expect(Ch.isNode(1.1)).toBe(false);
});

test("sends object to isNode", () => {
  expect(Ch.isNode({})).toBe(false);
});

test("sends empty array to isNode", () => {
  expect(Ch.isNode([])).toBe(false);
});

test("sends array to isNode", () => {
  expect(Ch.isNode(["white", "grey", "black"])).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isNode", () => {
  expect(Ch.isNode(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isNode", () => {
  expect(Ch.isNode(para)).toBe(true);
});

var node = document.createTextNode("new node");

test("sends node to isNode", () => {
  expect(Ch.isNode(node)).toBe(true);
});
