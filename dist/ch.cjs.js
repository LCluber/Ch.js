/** MIT License
 *
 * Copyright (c) 2009 Ludovic CLUBER
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice (including the next
 * paragraph) shall be included in all copies or substantial portions of the
 * Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * https://github.com/LCluber/Ch.js
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isBoolean(bool) {
    return typeof bool === "boolean";
}
exports.isBoolean = isBoolean;
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
exports.isJson = isJson;
function isFunction(func) {
    if (func) {
        var getType = {};
        return func && getType.toString.call(func) === "[object Function]";
    }
    return false;
}
exports.isFunction = isFunction;
function isObject(object) {
    return object !== null && typeof object === "object" && !isArray(object);
}
exports.isObject = isObject;
function isArray(array) {
    return array !== null && array.constructor === Array;
}
exports.isArray = isArray;
function isAscii(code, extended) {
    if (extended === void 0) { extended = true; }
    if (isInteger(code, false)) {
        return (extended && code >= 0 && code <= 255) || (code >= 0 && code <= 127);
    }
    return false;
}
exports.isAscii = isAscii;
function isInteger(number, typeCheck) {
    if (typeCheck === void 0) { typeCheck = true; }
    var int = parseInt(number, 10);
    return typeCheck ? number === int : number == int;
}
exports.isInteger = isInteger;
function isFloat(number, typeCheck) {
    if (typeCheck === void 0) { typeCheck = true; }
    var moduloCheck = number % 1 !== 0;
    return typeCheck
        ? Number(number) === number && moduloCheck
        : Number(number) == number && moduloCheck;
}
exports.isFloat = isFloat;
function isNumber(number) {
    return isInteger(number) || isFloat(number);
}
exports.isNumber = isNumber;
function isString(string) {
    return typeof string === "string";
}
exports.isString = isString;
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
exports.isHtmlElement = isHtmlElement;
function isHtmlEventAttribute(htmlEventAttribute) {
    switch (htmlEventAttribute) {
        case "onafterprint":
        case "onbeforeprint":
        case "onbeforeunload":
        case "onerror":
        case "onhashchange":
        case "onload":
        case "onmessage":
        case "onoffline":
        case "ononline":
        case "onpagehide":
        case "onpageshow":
        case "onpopstate":
        case "onresize":
        case "onstorage":
        case "onunload":
        case "onblur":
        case "onchange":
        case "oncontextmenu":
        case "onfocus":
        case "oninput":
        case "oninvalid":
        case "onreset":
        case "onsearch":
        case "onselect":
        case "onsubmit":
        case "onkeydown":
        case "onkeypress":
        case "onkeyup":
        case "onclick":
        case "ondblclick":
        case "onmousedown":
        case "onmousemove":
        case "onmouseout":
        case "onmouseover":
        case "onmouseup":
        case "onmousewheel":
        case "onwheel":
        case "ondrag":
        case "ondragend":
        case "ondragenter":
        case "ondragleave":
        case "ondragover":
        case "ondragstart":
        case "ondrop":
        case "onscroll":
        case "oncopy":
        case "oncut":
        case "onpaste":
        case "onabort":
        case "oncanplay":
        case "oncanplaythrough":
        case "oncuechange":
        case "ondurationchange":
        case "onemptied":
        case "onended":
        case "onerror":
        case "onloadeddata":
        case "onloadedmetadata":
        case "onloadstart":
        case "onpause":
        case "onplay":
        case "onplaying":
        case "onprogress":
        case "onratechange":
        case "onseeked":
        case "onseeking":
        case "onstalled":
        case "onsuspend":
        case "ontimeupdate":
        case "onvolumechange":
        case "onwaiting":
        case "ontoggle":
            return true;
        default:
            return false;
    }
}
exports.isHtmlEventAttribute = isHtmlEventAttribute;
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
exports.isNode = isNode;
function isRegex(regex) {
    return (regex instanceof RegExp) ? true : false;
}
exports.isRegex = isRegex;
function isEven(number) {
    return isInteger(number) && !(number & 1);
}
exports.isEven = isEven;
function isOdd(number) {
    return isInteger(number) && number & 1 ? true : false;
}
exports.isOdd = isOdd;
function isOrigin(number) {
    return number === 0 ? true : false;
}
exports.isOrigin = isOrigin;
function isPositive(number) {
    return isNumber(number) && number > 0 ? true : false;
}
exports.isPositive = isPositive;
function isNegative(number) {
    return number < 0 ? true : false;
}
exports.isNegative = isNegative;
