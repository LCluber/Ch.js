const Ch = require("../dist/ch.cjs");

test("sends null to isObject", () => {
  expect(Ch.isObject(null)).toBe(false);
});

test("sends true to isObject", () => {
  expect(Ch.isObject(true)).toBe(false);
});

test("sends false to isObject", () => {
  expect(Ch.isObject(false)).toBe(false);
});

test("sends string to isObject", () => {
  expect(Ch.isObject("string")).toBe(false);
});

test("sends positive even integer to isObject", () => {
  expect(Ch.isObject(2)).toBe(false);
});

test("sends positive odd integer to isObject", () => {
  expect(Ch.isObject(1)).toBe(false);
});

test("sends zero to isObject", () => {
  expect(Ch.isObject(0)).toBe(false);
});

test("sends positive float to isObject", () => {
  expect(Ch.isObject(1.1)).toBe(false);
});

test("sends negative odd integer to isObject", () => {
  expect(Ch.isObject(-1)).toBe(false);
});

test("sends negative even integer to isObject", () => {
  expect(Ch.isObject(-2)).toBe(false);
});

test("sends negative float to isObject", () => {
  expect(Ch.isObject(-1.1)).toBe(false);
});

test("sends object to isObject", () => {
  expect(Ch.isObject({})).toBe(true);
});

test("sends empty array to isObject", () => {
  expect(Ch.isObject([])).toBe(false);
});

test("sends array to isObject", () => {
  expect(Ch.isObject(["white", "grey", "black"])).toBe(false);
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

test("sends json to isObject", () => {
  expect(Ch.isObject(json)).toBe(false);
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

test("sends invalid json to isObject", () => {
  expect(Ch.isObject(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isObject", () => {
  expect(Ch.isObject(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isObject", () => {
  expect(Ch.isObject(para)).toBe(true);
});

var node = document.createTextNode("new node");

test("sends node to isObject", () => {
  expect(Ch.isObject(node)).toBe(true);
});
