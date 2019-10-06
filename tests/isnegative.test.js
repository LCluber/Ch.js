const Ch = require("../dist/ch.cjs");

test("sends null to isNegative", () => {
  expect(Ch.isNegative(null)).toBe(false);
});

test("sends true to isNegative", () => {
  expect(Ch.isNegative(true)).toBe(false);
});

test("sends false to isNegative", () => {
  expect(Ch.isNegative(false)).toBe(false);
});

test("sends string to isNegative", () => {
  expect(Ch.isNegative("string")).toBe(false);
});

test("sends positive even integer to isNegative", () => {
  expect(Ch.isNegative(2)).toBe(false);
});

test("sends positive odd integer to isNegative", () => {
  expect(Ch.isNegative(1)).toBe(false);
});

test("sends zero to isNegative", () => {
  expect(Ch.isNegative(0)).toBe(false);
});

test("sends positive float to isNegative", () => {
  expect(Ch.isNegative(1.1)).toBe(false);
});

test("sends negative odd integer to isNegative", () => {
  expect(Ch.isNegative(-1)).toBe(true);
});

test("sends negative even integer to isNegative", () => {
  expect(Ch.isNegative(-2)).toBe(true);
});

test("sends negative float to isNegative", () => {
  expect(Ch.isNegative(-1.1)).toBe(true);
});

test("sends object to isNegative", () => {
  expect(Ch.isNegative({})).toBe(false);
});

test("sends empty array to isNegative", () => {
  expect(Ch.isNegative([])).toBe(false);
});

test("sends array to isNegative", () => {
  expect(Ch.isNegative(["white", "grey", "black"])).toBe(false);
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

test("sends json to isNegative", () => {
  expect(Ch.isNegative(json)).toBe(false);
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

test("sends invalid json to isNegative", () => {
  expect(Ch.isNegative(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isNegative", () => {
  expect(Ch.isNegative(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isNegative", () => {
  expect(Ch.isNegative(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isNegative", () => {
  expect(Ch.isNegative(node)).toBe(false);
});
