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

var Ch = (function (exports) {
  'use strict';

  var Is =
  /*#__PURE__*/
  function () {
    function Is() {}

    Is.json = function json(str) {
      if (!this.string(str)) {
        return false;
      }

      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }

      return true;
    };

    Is.function = function _function(func) {
      var getType = {};
      return func && getType.toString.call(func) === '[object Function]';
    };

    Is.object = function object(_object) {
      return _object !== null && typeof _object === 'object';
    };

    Is.array = function array(_array) {
      return _array !== null && _array.constructor === Array;
    };

    Is.ascii = function ascii(code, extended) {
      return (extended ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(code);
    };

    Is.integer = function integer(number) {
      return number === parseInt(number, 10);
    };

    Is.float = function float(number) {
      return Number(number) === number && number % 1 !== 0;
    };

    Is.string = function string(_string) {
      return typeof _string === 'string';
    };

    Is.htmlElement = function htmlElement(_htmlElement) {
      return typeof HTMLElement === "object" ? _htmlElement instanceof HTMLElement : _htmlElement && typeof _htmlElement === "object" && _htmlElement !== null && _htmlElement.nodeType === 1 && typeof _htmlElement.nodeName === "string";
    };

    Is.node = function node(_node) {
      return typeof Node === "object" ? _node instanceof Node : _node && typeof _node === "object" && typeof _node.nodeType === "number" && typeof _node.nodeName === "string";
    };

    return Is;
  }();

  exports.Is = Is;

  return exports;

}({}));
