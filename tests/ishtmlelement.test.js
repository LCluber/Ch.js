const Ch = require("../dist/ch");

test("sends null to isHtmlElement", () => {
  expect(Ch.isHtmlElement(null)).toBe(false);
});

test("sends true to isHtmlElement", () => {
  expect(Ch.isHtmlElement(true)).toBe(false);
});

test("sends false to isHtmlElement", () => {
  expect(Ch.isHtmlElement(false)).toBe(false);
});

test("sends string to isHtmlElement", () => {
  expect(Ch.isHtmlElement("string")).toBe(false);
});

test("sends integer to isHtmlElement", () => {
  expect(Ch.isHtmlElement(1)).toBe(false);
});

test("sends zero to isHtmlElement", () => {
  expect(Ch.isHtmlElement(0)).toBe(false);
});

test("sends float to isHtmlElement", () => {
  expect(Ch.isHtmlElement(1.1)).toBe(false);
});

test("sends object to isHtmlElement", () => {
  expect(Ch.isHtmlElement({})).toBe(false);
});

test("sends empty array to isHtmlElement", () => {
  expect(Ch.isHtmlElement([])).toBe(false);
});

test("sends array to isHtmlElement", () => {
  expect(Ch.isHtmlElement(["white", "grey", "black"])).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isHtmlElement", () => {
  expect(Ch.isHtmlElement(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isHtmlElement", () => {
  expect(Ch.isHtmlElement(para)).toBe(true);
});

var node = document.createTextNode("new node");

test("sends node to isHtmlElement", () => {
  expect(Ch.isHtmlElement(node)).toBe(false);
});
