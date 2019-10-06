const Ch = require("../dist/ch.cjs");

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

test("sends positive even integer to isHtmlElement", () => {
  expect(Ch.isHtmlElement(2)).toBe(false);
});

test("sends positive odd integer to isHtmlElement", () => {
  expect(Ch.isHtmlElement(1)).toBe(false);
});

test("sends zero to isHtmlElement", () => {
  expect(Ch.isHtmlElement(0)).toBe(false);
});

test("sends positive float to isHtmlElement", () => {
  expect(Ch.isHtmlElement(1.1)).toBe(false);
});

test("sends negative odd integer to isHtmlElement", () => {
  expect(Ch.isHtmlElement(-1)).toBe(false);
});

test("sends negative even integer to isHtmlElement", () => {
  expect(Ch.isHtmlElement(-2)).toBe(false);
});

test("sends negative float to isHtmlElement", () => {
  expect(Ch.isHtmlElement(-1.1)).toBe(false);
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

var json = `{
  "actor": {
    "name": "Tom Cruise",
    "age": 56,
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  }
}`;

test("sends json to isHtmlElement", () => {
  expect(Ch.isHtmlElement(json)).toBe(false);
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

test("sends invalid json to isHtmlElement", () => {
  expect(Ch.isHtmlElement(invalidjson)).toBe(false);
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
