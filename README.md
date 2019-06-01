## Synopsis

Ch.js is an open source variable checker library written in TypeScript.

## Motivation

The goal of this library is to provide an easy way to check if a variable is what it is supposed to be. Function, object, ascii, integer, string, json...

## Installation

### NPM

```bash
$ npm install @lcluber/chjs
```

### Yarn

```bash
$ yarn add @lcluber/chjs
````

## Usage

### ES6

```javascript
import { Is } from '@lcluber/chjs';

if (Is.function(variable)) {
 //variable is a function
}

if (!Is.array(variable)) {
  //variable is not an array
}
```

### IIFE

```html
<script src="node-modules/@lcluber/chjs/dist/ch.iife.min.js"></script>
```

```javascript

if (Ch.Is.function(variable)) {
 //variable is a function
}

if (!Ch.Is.array(variable)) {
  //variable is not an array
}
```

## API Reference

```javascript
static Is.json(string: any): Object|SyntaxError|TypeError {}

static Is.function(func: any): boolean {}

static Is.object(object: any): boolean {}

static Is.array(array: any): boolean {}

static Is.ascii(code: any, extended: boolean): boolean {}

static Is.integer(number: any): boolean {}

static Is.float(number: any): boolean {}

static Is.string(string: any): boolean {}
```

## Contributors

Ch.js is still in early development and I would be glad to get all the help you can provide for this project.
To contribute you can clone the project on **[GitHub](https://github.com/LCluber/Ch.js)** and See **NOTICE.md** for detailed installation walkthrough.

## License

MIT License

Copyright (c) 2018 Ludovic CLUBER

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
