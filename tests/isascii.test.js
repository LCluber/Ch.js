const Ch = require("../dist/ch");

test("sends null to isAscii", () => {
  expect(Ch.isAscii(null, false)).toBe(false);
});

test("sends true to isAscii", () => {
  expect(Ch.isAscii(true, false)).toBe(false);
});

test("sends false to isAscii", () => {
  expect(Ch.isAscii(false, false)).toBe(false);
});

test("sends string to isAscii", () => {
  expect(Ch.isAscii("string", false)).toBe(false);
});

test("sends integer to isAscii", () => {
  expect(Ch.isAscii(1, false)).toBe(true);
});

test("sends zero to isAscii", () => {
  expect(Ch.isAscii(0, false)).toBe(true);
});

test("sends 128 to isAscii not extended", () => {
  expect(Ch.isAscii(128, false)).toBe(false);
});

test("sends 255 to isAscii extended", () => {
  expect(Ch.isAscii(255, true)).toBe(true);
});

test("sends 256 to isAscii extended", () => {
  expect(Ch.isAscii(256, true)).toBe(false);
});

test("sends float to isAscii", () => {
  expect(Ch.isAscii(1.1, false)).toBe(false);
});

test("sends object to isAscii", () => {
  expect(Ch.isAscii({}, false)).toBe(false);
});

test("sends empty array to isAscii", () => {
  expect(Ch.isAscii([], false)).toBe(false);
});

test("sends array to isAscii", () => {
  expect(Ch.isAscii(["white", "grey", "black"], false)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isAscii", () => {
  expect(Ch.isAscii(testFunction, false)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isAscii", () => {
  expect(Ch.isAscii(para, false)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isAscii", () => {
  expect(Ch.isAscii(node, false)).toBe(false);
});
