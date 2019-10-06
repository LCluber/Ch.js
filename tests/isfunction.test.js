const Ch = require("../dist/ch.cjs");

test("sends null to isFunction", () => {
  expect(Ch.isFunction(null)).toBe(false);
});

test("sends true to isFunction", () => {
  expect(Ch.isFunction(true)).toBe(false);
});

test("sends false to isFunction", () => {
  expect(Ch.isFunction(false)).toBe(false);
});

test("sends string to isFunction", () => {
  expect(Ch.isFunction("string")).toBe(false);
});

test("sends positive even integer to isFunction", () => {
  expect(Ch.isFunction(2)).toBe(false);
});

test("sends positive odd integer to isFunction", () => {
  expect(Ch.isFunction(1)).toBe(false);
});

test("sends zero to isFunction", () => {
  expect(Ch.isFunction(0)).toBe(false);
});

test("sends positive float to isFunction", () => {
  expect(Ch.isFunction(1.1)).toBe(false);
});

test("sends negative odd integer to isFunction", () => {
  expect(Ch.isFunction(-1)).toBe(false);
});

test("sends negative even integer to isFunction", () => {
  expect(Ch.isFunction(-2)).toBe(false);
});

test("sends negative float to isFunction", () => {
  expect(Ch.isFunction(-1.1)).toBe(false);
});

test("sends object to isFunction", () => {
  expect(Ch.isFunction({})).toBe(false);
});

test("sends empty array to isFunction", () => {
  expect(Ch.isFunction([])).toBe(false);
});

test("sends array to isFunction", () => {
  expect(Ch.isFunction(["white", "grey", "black"])).toBe(false);
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

test("sends json to isFunction", () => {
  expect(Ch.isFunction(json)).toBe(false);
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

test("sends invalid json to isFunction", () => {
  expect(Ch.isFunction(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isFunction", () => {
  expect(Ch.isFunction(testFunction)).toBe(true);
});

var para = document.createElement("p");

test("sends htmlElement to isFunction", () => {
  expect(Ch.isFunction(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isFunction", () => {
  expect(Ch.isFunction(node)).toBe(false);
});
