/* MIT License

Copyright (c) 2009 Ludovic CLUBER

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

https://github.com/LCluber/Ch.js
*/
declare function isBoolean(bool: any): boolean;
declare function isJson(str: any): boolean;
declare function isFunction(func: any): boolean;
declare function isObject(object: any): boolean;
declare function isArray(array: any): boolean;
declare function isAscii(code: any, extended?: boolean): boolean;
declare function isInteger(number: any, typeCheck?: boolean): boolean;
declare function isFloat(number: any, typeCheck?: boolean): boolean;
declare function isNumber(number: any): boolean;
declare function isString(string: any): boolean;
declare function isHtmlElement(htmlElement: any): boolean;
declare function isHtmlEventAttribute(htmlEventAttribute: any): boolean;
declare function isNode(node: any): boolean;
declare function isEven(number: any): boolean;
declare function isOdd(number: any): boolean;
declare function isOrigin(number: any): boolean;
declare function isPositive(number: any): boolean;
declare function isNegative(number: any): boolean;
export { isBoolean, isJson, isFunction, isObject, isArray, isAscii, isInteger, isFloat, isNumber, isString, isHtmlElement, isHtmlEventAttribute, isNode, isEven, isOdd, isOrigin, isPositive, isNegative };
