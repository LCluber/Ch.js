const Ch = require("../dist/ch");

test("sends null to isBoolean", () => {
  expect(Ch.isBoolean(null)).toBe(false);
});

test("sends true to isBoolean", () => {
  expect(Ch.isBoolean(true)).toBe(true);
});

test("sends false to isBoolean", () => {
  expect(Ch.isBoolean(false)).toBe(true);
});

test("sends string to isBoolean", () => {
  expect(Ch.isBoolean("string")).toBe(false);
});

test("sends integer to isBoolean", () => {
  expect(Ch.isBoolean(1)).toBe(false);
});

test("sends zero to isBoolean", () => {
  expect(Ch.isBoolean(0)).toBe(false);
});

test("sends float to isBoolean", () => {
  expect(Ch.isBoolean(1.1)).toBe(false);
});

test("sends object to isBoolean", () => {
  expect(Ch.isBoolean({})).toBe(false);
});

test("sends empty array to isBoolean", () => {
  expect(Ch.isBoolean([])).toBe(false);
});

test("sends array to isBoolean", () => {
  expect(Ch.isBoolean(["white", "grey", "black"])).toBe(false);
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

test("sends json to isBoolean", () => {
  expect(Ch.isBoolean(json)).toBe(false);
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

test("sends invalid json to isBoolean", () => {
  expect(Ch.isBoolean(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isBoolean", () => {
  expect(Ch.isBoolean(testFunction)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isBoolean", () => {
  expect(Ch.isBoolean(para)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isBoolean", () => {
  expect(Ch.isBoolean(node)).toBe(false);
});
