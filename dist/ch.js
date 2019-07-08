/** MIT License
* 
* Copyright (c) 2018 Ludovic CLUBER 
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
* http://chjs.lcluber.com
*/

class Is {
    static boolean(bool) {
        return typeof bool === "boolean";
    }
    static json(str) {
        if (!this.string(str)) {
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
    static function(func) {
        let getType = {};
        return func && getType.toString.call(func) === '[object Function]';
    }
    static object(object) {
        return object !== null && typeof object === 'object';
    }
    static array(array) {
        return array !== null && array.constructor === Array;
    }
    static ascii(code, extended) {
        return (extended ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(code);
    }
    static integer(number) {
        return number === parseInt(number, 10);
    }
    static float(number) {
        return Number(number) === number && number % 1 !== 0;
    }
    static string(string) {
        return typeof string === 'string';
    }
    static htmlElement(htmlElement) {
        return (typeof HTMLElement === "object"
            ? htmlElement instanceof HTMLElement
            : htmlElement && typeof htmlElement === "object" && htmlElement !== null && htmlElement.nodeType === 1 && typeof htmlElement.nodeName === "string");
    }
    static node(node) {
        return (typeof Node === "object" ? node instanceof Node :
            node && typeof node === "object" && typeof node.nodeType === "number" && typeof node.nodeName === "string");
    }
}

export { Is };
