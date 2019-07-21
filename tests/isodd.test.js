const Ch = require("../dist/ch");

test("sends null to isOdd", () => {
  expect(Ch.isOdd(null)).toBe(false);
});

test("sends true to isOdd", () => {
  expect(Ch.isOdd(true)).toBe(false);
});

test("sends false to isOdd", () => {
  expect(Ch.isOdd(false)).toBe(false);
});

test("sends string to isOdd", () => {
  expect(Ch.isOdd("string")).toBe(false);
});

test("sends positive even integer to isOdd", () => {
  expect(Ch.isOdd(2)).toBe(false);
});

test("sends positive odd integer to isOdd", () => {
  expect(Ch.isOdd(1)).toBe(true);
});

test("sends zero to isOdd", () => {
  expect(Ch.isOdd(0)).toBe(false);
});

test("sends positive float to isOdd", () => {
  expect(Ch.isOdd(1.1)).toBe(false);
});

test("sends negative odd integer to isOdd", () => {
  expect(Ch.isOdd(-1)).toBe(true);
});

test("sends negative even integer to isOdd", () => {
  expect(Ch.isOdd(-2)).toBe(false);
});

test("sends negative float to isOdd", () => {
  expect(Ch.isOdd(-1.1)).toBe(false);
});

test("sends object to isOdd", () => {
  expect(Ch.isOdd({})).toBe(false);
});

test("sends empty array to isOdd", () => {
  expect(Ch.isOdd([])).toBe(false);
});

test("sends array to isOdd", () => {
  expect(Ch.isOdd(["white", "grey", "black"])).toBe(false);
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

test("sends json to isOdd", () => {
  expect(Ch.isOdd(json)).toBe(false);
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

test("sends invalid json to isOdd", () => {
  expect(Ch.isOdd(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isOdd", () => {
  expect(Ch.isOdd(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isOdd", () => {
  expect(Ch.isOdd(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isOdd", () => {
  expect(Ch.isOdd(node)).toBe(false);
});
