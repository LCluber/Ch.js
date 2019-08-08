const Ch = require("../dist/ch");

test("sends null to isInteger", () => {
  expect(Ch.isInteger(null)).toBe(false);
});

test("sends true to isInteger", () => {
  expect(Ch.isInteger(true)).toBe(false);
});

test("sends false to isInteger", () => {
  expect(Ch.isInteger(false)).toBe(false);
});

test("sends string to isInteger", () => {
  expect(Ch.isInteger("string")).toBe(false);
});

test("sends figure as string to isInteger", () => {
  expect(Ch.isInteger("1")).toBe(false);
});

test("sends number as string to isInteger", () => {
  expect(Ch.isInteger("89")).toBe(false);
});

test("sends number in string to isInteger", () => {
  expect(Ch.isInteger("89rt")).toBe(false);
});

test("sends figure as string to isInteger without typeCheck", () => {
  expect(Ch.isInteger("1", false)).toBe(true);
});

test("sends number as string to isInteger without typeCheck", () => {
  expect(Ch.isInteger("89", false)).toBe(true);
});

test("sends number in string to isInteger without typeCheck", () => {
  expect(Ch.isInteger("89rt", false)).toBe(false);
});

test("sends positive even integer to isInteger", () => {
  expect(Ch.isInteger(2)).toBe(true);
});

test("sends positive odd integer to isInteger", () => {
  expect(Ch.isInteger(1)).toBe(true);
});

test("sends zero to isInteger", () => {
  expect(Ch.isInteger(0)).toBe(true);
});

test("sends positive float to isInteger", () => {
  expect(Ch.isInteger(1.1)).toBe(false);
});

test("sends negative odd integer to isInteger", () => {
  expect(Ch.isInteger(-1)).toBe(true);
});

test("sends negative even integer to isInteger", () => {
  expect(Ch.isInteger(-2)).toBe(true);
});

test("sends negative float to isInteger", () => {
  expect(Ch.isInteger(-1.1)).toBe(false);
});

test("sends object to isInteger", () => {
  expect(Ch.isInteger({})).toBe(false);
});

test("sends empty array to isInteger", () => {
  expect(Ch.isInteger([])).toBe(false);
});

test("sends array to isInteger", () => {
  expect(Ch.isInteger(["white", "grey", "black"])).toBe(false);
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

test("sends json to isInteger", () => {
  expect(Ch.isInteger(json)).toBe(false);
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

test("sends invalid json to isInteger", () => {
  expect(Ch.isInteger(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isInteger", () => {
  expect(Ch.isInteger(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isInteger", () => {
  expect(Ch.isInteger(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isInteger", () => {
  expect(Ch.isInteger(node)).toBe(false);
});
