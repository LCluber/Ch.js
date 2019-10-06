const Ch = require("../dist/ch.cjs");

test("sends null to isFloat", () => {
  expect(Ch.isFloat(null)).toBe(false);
});

test("sends true to isFloat", () => {
  expect(Ch.isFloat(true)).toBe(false);
});

test("sends false to isFloat", () => {
  expect(Ch.isFloat(false)).toBe(false);
});

test("sends string to isFloat", () => {
  expect(Ch.isFloat("string")).toBe(false);
});

test("sends figure as string to isFloat", () => {
  expect(Ch.isFloat("1")).toBe(false);
});

test("sends number as string to isFloat", () => {
  expect(Ch.isFloat("89")).toBe(false);
});

test("sends number in string to isFloat", () => {
  expect(Ch.isFloat("89rt")).toBe(false);
});

test("sends figure as string to isFloat without typeCheck", () => {
  expect(Ch.isFloat("1", false)).toBe(false);
});

test("sends number as string to isFloat without typeCheck", () => {
  expect(Ch.isFloat("89", false)).toBe(false);
});

test("sends number in string to isFloat without typeCheck", () => {
  expect(Ch.isFloat("89rt", false)).toBe(false);
});

test("sends float as string to isFloat", () => {
  expect(Ch.isFloat("1.5")).toBe(false);
});

test("sends number in string to isFloat", () => {
  expect(Ch.isFloat("8.9rt")).toBe(false);
});

test("sends float as string to isFloat without typeCheck", () => {
  expect(Ch.isFloat("1.5", false)).toBe(true);
});

test("sends float in string to isFloat without typeCheck", () => {
  expect(Ch.isFloat("8.9rt", false)).toBe(false);
});

test("sends positive even integer to isFloat", () => {
  expect(Ch.isFloat(2)).toBe(false);
});

test("sends positive odd integer to isFloat", () => {
  expect(Ch.isFloat(1)).toBe(false);
});

test("sends zero to isFloat", () => {
  expect(Ch.isFloat(0)).toBe(false);
});

test("sends positive float to isFloat", () => {
  expect(Ch.isFloat(1.1)).toBe(true);
});

test("sends negative odd integer to isFloat", () => {
  expect(Ch.isFloat(-1)).toBe(false);
});

test("sends negative even integer to isFloat", () => {
  expect(Ch.isFloat(-2)).toBe(false);
});

test("sends negative float to isFloat", () => {
  expect(Ch.isFloat(-1.1)).toBe(true);
});

test("sends object to isFloat", () => {
  expect(Ch.isFloat({})).toBe(false);
});

test("sends empty array to isFloat", () => {
  expect(Ch.isFloat([])).toBe(false);
});

test("sends array to isFloat", () => {
  expect(Ch.isFloat(["white", "grey", "black"])).toBe(false);
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

test("sends json to isFloat", () => {
  expect(Ch.isFloat(json)).toBe(false);
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

test("sends invalid json to isFloat", () => {
  expect(Ch.isFloat(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isFloat", () => {
  expect(Ch.isFloat(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isFloat", () => {
  expect(Ch.isFloat(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isFloat", () => {
  expect(Ch.isFloat(node)).toBe(false);
});
