const Ch = require("../dist/ch");

test("sends null to isAscii", () => {
  expect(Ch.isAscii(null, false)).toBe(false);
});

test("sends true to isAscii", () => {
  expect(Ch.isAscii(true, false)).toBe(false);
});

test("sends false to isAscii", () => {
  expect(Ch.isAscii(false, false)).toBe(false);
});

test("sends string to isAscii", () => {
  expect(Ch.isAscii("string", false)).toBe(false);
});

test("sends positive even integer to isAscii not extended", () => {
  expect(Ch.isAscii(2, false)).toBe(true);
});

test("sends positive odd integer to isAscii not extended", () => {
  expect(Ch.isAscii(1, false)).toBe(true);
});

test("sends zero to isAscii not extended", () => {
  expect(Ch.isAscii(0, false)).toBe(true);
});

test("sends positive float to isAscii not extended", () => {
  expect(Ch.isAscii(1.1, false)).toBe(false);
});

test("sends negative odd integer to isAscii not extended", () => {
  expect(Ch.isAscii(-1, false)).toBe(false);
});

test("sends negative even integer to isAscii not extended", () => {
  expect(Ch.isAscii(-2, false)).toBe(false);
});

test("sends negative float to isAscii not extended", () => {
  expect(Ch.isAscii(-1.1, false)).toBe(false);
});

test("sends positive even integer to isAscii extended", () => {
  expect(Ch.isAscii(2, true)).toBe(true);
});

test("sends positive odd integer to isAscii extended", () => {
  expect(Ch.isAscii(1, true)).toBe(true);
});

test("sends zero to isAscii extended", () => {
  expect(Ch.isAscii(0, true)).toBe(true);
});

test("sends positive float to isAscii extended", () => {
  expect(Ch.isAscii(1.1, true)).toBe(false);
});

test("sends negative odd integer to isAscii extended", () => {
  expect(Ch.isAscii(-1, true)).toBe(false);
});

test("sends negative even integer to isAscii extended", () => {
  expect(Ch.isAscii(-2, true)).toBe(false);
});

test("sends negative float to isAscii extended", () => {
  expect(Ch.isAscii(-1.1, true)).toBe(false);
});

test("sends 127 to isAscii not extended", () => {
  expect(Ch.isAscii(127, false)).toBe(true);
});

test("sends 128 to isAscii not extended", () => {
  expect(Ch.isAscii(128, false)).toBe(false);
});

test("sends 255 to isAscii extended", () => {
  expect(Ch.isAscii(255, true)).toBe(true);
});

test("sends 256 to isAscii extended", () => {
  expect(Ch.isAscii(256, true)).toBe(false);
});

test("sends object to isAscii", () => {
  expect(Ch.isAscii({}, false)).toBe(false);
});

test("sends empty array to isAscii", () => {
  expect(Ch.isAscii([], false)).toBe(false);
});

test("sends array to isAscii", () => {
  expect(Ch.isAscii(["white", "grey", "black"], false)).toBe(false);
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

test("sends json to isAscii", () => {
  expect(Ch.isAscii(json)).toBe(false);
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

test("sends invalid json to isAscii", () => {
  expect(Ch.isAscii(invalidjson)).toBe(false);
});

function testFunction() {
  console.log("function");
}

test("sends function to isAscii", () => {
  expect(Ch.isAscii(testFunction, false)).toBe(false);
});

var para = document.createElement("p");

test("sends htmlElement to isAscii", () => {
  expect(Ch.isAscii(para, false)).toBe(false);
});

var node = document.createTextNode("new node");

test("sends node to isAscii", () => {
  expect(Ch.isAscii(node, false)).toBe(false);
});
