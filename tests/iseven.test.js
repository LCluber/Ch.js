const Ch = require("../dist/ch");

test("sends null to isEven", () => {
  expect(Ch.isEven(null)).toBe(false);
});

test("sends true to isEven", () => {
  expect(Ch.isEven(true)).toBe(false);
});

test("sends false to isEven", () => {
  expect(Ch.isEven(false)).toBe(false);
});

test("sends string to isEven", () => {
  expect(Ch.isEven("string")).toBe(false);
});

test("sends positive even integer to isEven", () => {
  expect(Ch.isEven(2)).toBe(true);
});

test("sends positive odd integer to isEven", () => {
  expect(Ch.isEven(1)).toBe(false);
});

test("sends zero to isEven", () => {
  expect(Ch.isEven(0)).toBe(true);
});

test("sends positive float to isEven", () => {
  expect(Ch.isEven(1.1)).toBe(false);
});

test("sends negative odd integer to isEven", () => {
  expect(Ch.isEven(-1)).toBe(false);
});

test("sends negative even integer to isEven", () => {
  expect(Ch.isEven(-2)).toBe(true);
});

test("sends negative float to isEven", () => {
  expect(Ch.isEven(-1.1)).toBe(false);
});

test("sends object to isEven", () => {
  expect(Ch.isEven({})).toBe(false);
});

test("sends empty array to isEven", () => {
  expect(Ch.isEven([])).toBe(false);
});

test("sends array to isEven", () => {
  expect(Ch.isEven(["white", "grey", "black"])).toBe(false);
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

test("sends json to isEven", () => {
  expect(Ch.isEven(json)).toBe(false);
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

test("sends invalid json to isEven", () => {
  expect(Ch.isEven(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isEven", () => {
  expect(Ch.isEven(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isEven", () => {
  expect(Ch.isEven(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isEven", () => {
  expect(Ch.isEven(node)).toBe(false);
});
