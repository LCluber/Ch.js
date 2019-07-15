/* MIT License

Copyright (c) 2009 Ludovic CLUBER

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

https://github.com/LCluber/Ch.js
*/
var Ch = (function (exports) {
    'use strict';

    function isBoolean(bool) {
        return typeof bool === "boolean";
    }
    function isJson(str) {
        if (!isString(str)) {
            return false;
        }
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    }
    function isFunction(func) {
        var getType = {};
        return func && getType.toString.call(func) === "[object Function]";
    }
    function isObject(object) {
        return object !== null && typeof object === "object" && !isArray(object);
    }
    function isArray(array) {
        return array !== null && array.constructor === Array;
    }
    function isAscii(code, extended) {
        if (isInteger(code)) {
            return (extended && code >= 0 && code <= 255) || (code >= 0 && code <= 127);
        }
        return false;
    }
    function isInteger(number) {
        return number === parseInt(number, 10);
    }
    function isFloat(number) {
        return Number(number) === number && number % 1 !== 0;
    }
    function isString(string) {
        return typeof string === "string";
    }
    function isHtmlElement(htmlElement) {
        if (htmlElement) {
            return typeof HTMLElement === "object"
                ? htmlElement instanceof HTMLElement
                : htmlElement &&
                    typeof htmlElement === "object" &&
                    htmlElement !== null &&
                    htmlElement.nodeType === 1 &&
                    typeof htmlElement.nodeName === "string";
        }
        return false;
    }
    function isNode(node) {
        if (node) {
            return typeof Node === "object"
                ? node instanceof Node
                : node &&
                    typeof node === "object" &&
                    typeof node.nodeType === "number" &&
                    typeof node.nodeName === "string";
        }
        return false;
    }

    exports.isArray = isArray;
    exports.isAscii = isAscii;
    exports.isBoolean = isBoolean;
    exports.isFloat = isFloat;
    exports.isFunction = isFunction;
    exports.isHtmlElement = isHtmlElement;
    exports.isInteger = isInteger;
    exports.isJson = isJson;
    exports.isNode = isNode;
    exports.isObject = isObject;
    exports.isString = isString;

    return exports;

}({}));
