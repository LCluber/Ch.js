const Ch = require("../dist/ch.cjs");

test("sends null to isOrigin", () => {
  expect(Ch.isOrigin(null)).toBe(false);
});

test("sends true to isOrigin", () => {
  expect(Ch.isOrigin(true)).toBe(false);
});

test("sends false to isOrigin", () => {
  expect(Ch.isOrigin(false)).toBe(false);
});

test("sends string to isOrigin", () => {
  expect(Ch.isOrigin("string")).toBe(false);
});

test("sends positive even integer to isOrigin", () => {
  expect(Ch.isOrigin(2)).toBe(false);
});

test("sends positive odd integer to isOrigin", () => {
  expect(Ch.isOrigin(1)).toBe(false);
});

test("sends zero to isOrigin", () => {
  expect(Ch.isOrigin(0)).toBe(true);
});

test("sends positive float to isOrigin", () => {
  expect(Ch.isOrigin(1.1)).toBe(false);
});

test("sends negative odd integer to isOrigin", () => {
  expect(Ch.isOrigin(-1)).toBe(false);
});

test("sends negative even integer to isOrigin", () => {
  expect(Ch.isOrigin(-2)).toBe(false);
});

test("sends negative float to isOrigin", () => {
  expect(Ch.isOrigin(-1.1)).toBe(false);
});

test("sends object to isOrigin", () => {
  expect(Ch.isOrigin({})).toBe(false);
});

test("sends empty array to isOrigin", () => {
  expect(Ch.isOrigin([])).toBe(false);
});

test("sends array to isOrigin", () => {
  expect(Ch.isOrigin(["white", "grey", "black"])).toBe(false);
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

test("sends json to isOrigin", () => {
  expect(Ch.isOrigin(json)).toBe(false);
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

test("sends invalid json to isOrigin", () => {
  expect(Ch.isOrigin(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isOrigin", () => {
  expect(Ch.isOrigin(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isOrigin", () => {
  expect(Ch.isOrigin(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isOrigin", () => {
  expect(Ch.isOrigin(node)).toBe(false);
});
