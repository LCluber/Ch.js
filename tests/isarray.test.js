const Ch = require("../dist/ch");

test("sends null to isArray", () => {
  expect(Ch.isArray(null)).toBe(false);
});

test("sends true to isArray", () => {
  expect(Ch.isArray(true)).toBe(false);
});

test("sends false to isArray", () => {
  expect(Ch.isArray(false)).toBe(false);
});

test("sends string to isArray", () => {
  expect(Ch.isArray("string")).toBe(false);
});

test("sends integer to isArray", () => {
  expect(Ch.isArray(1)).toBe(false);
});

test("sends zero to isArray", () => {
  expect(Ch.isArray(0)).toBe(false);
});

test("sends float to isArray", () => {
  expect(Ch.isArray(1.1)).toBe(false);
});

test("sends object to isArray", () => {
  expect(Ch.isArray({})).toBe(false);
});

test("sends empty array to isArray", () => {
  expect(Ch.isArray([])).toBe(true);
});

test("sends array to isArray", () => {
  expect(Ch.isArray(["white", "grey", "black"])).toBe(true);
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

test("sends json to isArray", () => {
  expect(Ch.isArray(json)).toBe(false);
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

test("sends invalid json to isArray", () => {
  expect(Ch.isArray(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isArray", () => {
  expect(Ch.isArray(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isArray", () => {
  expect(Ch.isArray(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isArray", () => {
  expect(Ch.isArray(node)).toBe(false);
});
