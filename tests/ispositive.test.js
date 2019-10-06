const Ch = require("../dist/ch.cjs");

test("sends null to isPositive", () => {
  expect(Ch.isPositive(null)).toBe(false);
});

test("sends true to isPositive", () => {
  expect(Ch.isPositive(true)).toBe(false);
});

test("sends false to isPositive", () => {
  expect(Ch.isPositive(false)).toBe(false);
});

test("sends string to isPositive", () => {
  expect(Ch.isPositive("string")).toBe(false);
});

test("sends positive even integer to isPositive", () => {
  expect(Ch.isPositive(2)).toBe(true);
});

test("sends positive odd integer to isPositive", () => {
  expect(Ch.isPositive(1)).toBe(true);
});

test("sends zero to isPositive", () => {
  expect(Ch.isPositive(0)).toBe(false);
});

test("sends positive float to isPositive", () => {
  expect(Ch.isPositive(1.1)).toBe(true);
});

test("sends negative odd integer to isPositive", () => {
  expect(Ch.isPositive(-1)).toBe(false);
});

test("sends negative even integer to isPositive", () => {
  expect(Ch.isPositive(-2)).toBe(false);
});

test("sends negative float to isPositive", () => {
  expect(Ch.isPositive(-1.1)).toBe(false);
});

test("sends object to isPositive", () => {
  expect(Ch.isPositive({})).toBe(false);
});

test("sends empty array to isPositive", () => {
  expect(Ch.isPositive([])).toBe(false);
});

test("sends array to isPositive", () => {
  expect(Ch.isPositive(["white", "grey", "black"])).toBe(false);
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

test("sends json to isPositive", () => {
  expect(Ch.isPositive(json)).toBe(false);
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

test("sends invalid json to isPositive", () => {
  expect(Ch.isPositive(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isPositive", () => {
  expect(Ch.isPositive(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isPositive", () => {
  expect(Ch.isPositive(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isPositive", () => {
  expect(Ch.isPositive(node)).toBe(false);
});
