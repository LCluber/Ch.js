const Ch = require("../dist/ch.cjs");

test("sends null to isNode", () => {
  expect(Ch.isNode(null)).toBe(false);
});

test("sends true to isNode", () => {
  expect(Ch.isNode(true)).toBe(false);
});

test("sends false to isNode", () => {
  expect(Ch.isNode(false)).toBe(false);
});

test("sends string to isNode", () => {
  expect(Ch.isNode("string")).toBe(false);
});

test("sends positive even integer to isNode", () => {
  expect(Ch.isNode(2)).toBe(false);
});

test("sends positive odd integer to isNode", () => {
  expect(Ch.isNode(1)).toBe(false);
});

test("sends zero to isNode", () => {
  expect(Ch.isNode(0)).toBe(false);
});

test("sends positive float to isNode", () => {
  expect(Ch.isNode(1.1)).toBe(false);
});

test("sends negative odd integer to isNode", () => {
  expect(Ch.isNode(-1)).toBe(false);
});

test("sends negative even integer to isNode", () => {
  expect(Ch.isNode(-2)).toBe(false);
});

test("sends negative float to isNode", () => {
  expect(Ch.isNode(-1.1)).toBe(false);
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

var json = `{
  "actor": {
    "name": "Tom Cruise",
    "age": 56,
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  }
}`;

test("sends json to isNode", () => {
  expect(Ch.isNode(json)).toBe(false);
});

var invalidjson = `{
  "actor: {
    "name": "Tom Cruise",
    "age": 56
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  }
}`;

test("sends invalid json to isNode", () => {
  expect(Ch.isNode(invalidjson)).toBe(false);
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
