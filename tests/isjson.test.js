const Ch = require("../dist/ch.cjs");

test("sends null to isJson", () => {
  expect(Ch.isJson(null)).toBe(false);
});

test("sends true to isJson", () => {
  expect(Ch.isJson(true)).toBe(false);
});

test("sends false to isJson", () => {
  expect(Ch.isJson(false)).toBe(false);
});

test("sends string to isJson", () => {
  expect(Ch.isJson("string")).toBe(false);
});

test("sends positive even integer to isJson", () => {
  expect(Ch.isJson(2)).toBe(false);
});

test("sends positive odd integer to isJson", () => {
  expect(Ch.isJson(1)).toBe(false);
});

test("sends zero to isJson", () => {
  expect(Ch.isJson(0)).toBe(false);
});

test("sends positive float to isJson", () => {
  expect(Ch.isJson(1.1)).toBe(false);
});

test("sends negative odd integer to isJson", () => {
  expect(Ch.isJson(-1)).toBe(false);
});

test("sends negative even integer to isJson", () => {
  expect(Ch.isJson(-2)).toBe(false);
});

test("sends negative float to isJson", () => {
  expect(Ch.isJson(-1.1)).toBe(false);
});

test("sends object to isJson", () => {
  expect(Ch.isJson({})).toBe(false);
});

test("sends empty array to isJson", () => {
  expect(Ch.isJson([])).toBe(false);
});

test("sends array to isJson", () => {
  expect(Ch.isJson(["white", "grey", "black"])).toBe(false);
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

test("sends json to isJson", () => {
  expect(Ch.isJson(json)).toBe(true);
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

test("sends invalid json to isJson", () => {
  expect(Ch.isJson(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isJson", () => {
  expect(Ch.isJson(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isJson", () => {
  expect(Ch.isJson(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isJson", () => {
  expect(Ch.isJson(node)).toBe(false);
});
