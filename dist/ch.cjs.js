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
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
    if (func) {
        const getType = {};
        return func && getType.toString.call(func) === "[object Function]";
    }
    return false;
}
function isObject(object) {
    return object !== null && typeof object === "object" && !isArray(object);
}
function isArray(array) {
    return array !== null && array.constructor === Array;
}
function isAscii(code, extended = true) {
    if (isInteger(code, false)) {
        return (extended && code >= 0 && code <= 255) || (code >= 0 && code <= 127);
    }
    return false;
}
function isInteger(number, typeCheck = true) {
    const int = parseInt(number, 10);
    return typeCheck ? number === int : number == int;
}
function isFloat(number, typeCheck = true) {
    const moduloCheck = number % 1 !== 0;
    return typeCheck ? (Number(number) === number && moduloCheck) : (Number(number) == number && moduloCheck);
}
function isNumeric(number) {
    return !isNaN(number - parseFloat(number));
}
function isNumber(number, typeCheck = true) {
    return typeCheck ? Number(number) === number : isNumeric(number);
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
function isRegex(regex, typeCheck = true) {
    if (typeCheck) {
        return regex instanceof RegExp ? true : false;
    }
    else {
        try {
            new RegExp(regex);
        }
        catch (e) {
            return false;
        }
        return true;
    }
}
function isEven(number, typeCheck = true) {
    return isInteger(number, typeCheck) && !(number & 1);
}
function isOdd(number, typeCheck = true) {
    return isInteger(number, typeCheck) && number & 1 ? true : false;
}
function isOrigin(number, typeCheck = true) {
    return typeCheck ? (number === 0 ? true : false) : (number == 0 ? true : false);
}
function isPositive(number, typeCheck = true) {
    return isNumber(number, typeCheck) && number > 0 ? true : false;
}
function isNegative(number, typeCheck = true) {
    return isNumber(number, typeCheck) && number < 0 ? true : false;
}
function isPowerOfTwo(number, typeCheck = true) {
    return isInteger(number, typeCheck) && !isOrigin(number, typeCheck) && (number & (number - 1)) === 0;
}
function isEmail(email) {
    var regex = /^(?=[a-z0-9@.!$%&'*+\/=?^_‘{|}~-]{6,254}$)(?=[a-z0-9.!#$%&'*+\/=?^_‘{|}~-]{1,64}@)[a-z0-9!#$%&'*+\/=?^‘{|}~]+(?:[\._-][a-z0-9!#$%&'*+\/=?^‘{|}~]+)*@(?:(?=[a-z0-9-]{1,63}\.)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?=[a-z0-9-]{2,63}$)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    return regex.test(String(email).toLowerCase());
}
function isIpAddress(ipAddress) {
    var regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return regex.test(ipAddress);
}

exports.isArray = isArray;
exports.isAscii = isAscii;
exports.isBoolean = isBoolean;
exports.isEmail = isEmail;
exports.isEven = isEven;
exports.isFloat = isFloat;
exports.isFunction = isFunction;
exports.isHtmlElement = isHtmlElement;
exports.isHtmlEventAttribute = isHtmlEventAttribute;
exports.isInteger = isInteger;
exports.isIpAddress = isIpAddress;
exports.isJson = isJson;
exports.isNegative = isNegative;
exports.isNode = isNode;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isOdd = isOdd;
exports.isOrigin = isOrigin;
exports.isPositive = isPositive;
exports.isPowerOfTwo = isPowerOfTwo;
exports.isRegex = isRegex;
exports.isString = isString;
