const Ch = require("../dist/ch");

test("sends null to isJson", () => {
  expect(Ch.isJson(null)).toBe(false);
});

test("sends true to isJson", () => {
  expect(Ch.isJson(true)).toBe(false);
});

test("sends false to isJson", () => {
  expect(Ch.isJson(false)).toBe(false);
});

test("sends string to isJson", () => {
  expect(Ch.isJson("string")).toBe(false);
});

test("sends integer to isJson", () => {
  expect(Ch.isJson(1)).toBe(false);
});

test("sends zero to isJson", () => {
  expect(Ch.isJson(0)).toBe(false);
});

test("sends float to isJson", () => {
  expect(Ch.isJson(1.1)).toBe(false);
});

test("sends object to isJson", () => {
  expect(Ch.isJson({})).toBe(false);
});

test("sends empty array to isJson", () => {
  expect(Ch.isJson([])).toBe(false);
});

test("sends array to isJson", () => {
  expect(Ch.isJson(["white", "grey", "black"])).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isJson", () => {
  expect(Ch.isJson(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isJson", () => {
  expect(Ch.isJson(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isJson", () => {
  expect(Ch.isJson(node)).toBe(false);
});
