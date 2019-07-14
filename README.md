## Synopsis

**[Ch.js](https://github.com/LCluber/Ch.js)** is an open source variable checker library written in TypeScript.

## Motivation

The goal of this library is to provide an easy way to check if a variable is what it is supposed to be. Function, object, ascii, boolean, integer, string, json...

## Installation

### NPM

```bash
$ npm install @lcluber/chjs
```

### Yarn

```bash
$ yarn add @lcluber/chjs
```

## Usage

### ES6

```javascript
import { isFunction, isArray } from "@lcluber/chjs";

if (isFunction(variable)) {
  //variable is a function
}

if (!isArray(variable)) {
  //variable is not an array
}
```

### IIFE

```html
<script src="node-modules/@lcluber/chjs/dist/ch.iife.min.js"></script>
```

```javascript
if (Ch.isFunction(variable)) {
  //variable is a function
}

if (!Ch.isArray(variable)) {
  //variable is not an array
}
```

## API Reference

```javascript
isBoolean(bool: any): boolean {}

isJson(string: any): boolean {}

isFunction(func: any): boolean {}

isObject(object: any): boolean {}

isArray(array: any): boolean {}

isAscii(code: any, extended: boolean): boolean {}

isInteger(number: any): boolean {}

isFloat(number: any): boolean {}

isString(string: any): boolean {}
```

## Contributors

Ch.js is still in development and I would be glad to get all the help you can provide for this project.
To contribute you can clone the project on **[GitHub](https://github.com/LCluber/Ch.js)** and See **NOTICE.md** for detailed installation walkthrough.

## License

**[MIT](https://github.com/LCluber/Ch.js/blob/master/LICENSE.md)**
