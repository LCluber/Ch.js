const Ch = require("../dist/ch");

test("sends null to isString", () => {
  expect(Ch.isString(null)).toBe(false);
});

test("sends true to isString", () => {
  expect(Ch.isString(true)).toBe(false);
});

test("sends false to isString", () => {
  expect(Ch.isString(false)).toBe(false);
});

test("sends string to isString", () => {
  expect(Ch.isString("string")).toBe(true);
});

test("sends integer to isString", () => {
  expect(Ch.isString(1)).toBe(false);
});

test("sends zero to isString", () => {
  expect(Ch.isString(0)).toBe(false);
});

test("sends float to isString", () => {
  expect(Ch.isString(1.1)).toBe(false);
});

test("sends object to isString", () => {
  expect(Ch.isString({})).toBe(false);
});

test("sends empty array to isString", () => {
  expect(Ch.isString([])).toBe(false);
});

test("sends array to isString", () => {
  expect(Ch.isString(["white", "grey", "black"])).toBe(false);
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

test("sends json to isString", () => {
  expect(Ch.isString(json)).toBe(true);
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

test("sends invalid json to isString", () => {
  expect(Ch.isString(invalidjson)).toBe(true);
});

function testFunction() {
  console.log("function");
}

test("sends function to isString", () => {
  expect(Ch.isString(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isString", () => {
  expect(Ch.isString(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isString", () => {
  expect(Ch.isString(node)).toBe(false);
});
