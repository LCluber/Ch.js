function isBoolean(bool: any): boolean {
  return typeof bool === "boolean";
}

function isJson(str: any): boolean /*Object|SyntaxError|TypeError*/ {
  if (!isString(str)) {
    return false;
    //return new TypeError('Parameter should be of type string');
  }
  // let json = str.replace(/(\r\n|\n|\r|\t)/gm, '');
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
    //return e;
  }
  return true;
}

function isFunction(func: any): boolean {
  let getType = {};
  return func && getType.toString.call(func) === "[object Function]";
}

function isObject(object: any): boolean {
  return object !== null && typeof object === "object" && !isArray(object);
}

function isArray(array: any): boolean {
  return array !== null && array.constructor === Array;
}

function isAscii(code: any, extended: boolean): boolean {
  if (isInteger(code)) {
    return (extended && code >= 0 && code <= 255) || (code >= 0 && code <= 127);
  }
  return false;
}

function isInteger(number: any): boolean {
  return number === parseInt(<string>number, 10);
}

function isFloat(number: any): boolean {
  return Number(number) === number && number % 1 !== 0;
}

function isNumber(number: any): boolean {
  return isInteger(number) || isFloat(number);
}

function isString(string: any): boolean {
  return typeof string === "string";
}

function isHtmlElement(htmlElement: any): boolean {
  if (htmlElement) {
    return typeof HTMLElement === "object"
      ? htmlElement instanceof HTMLElement
      : htmlElement &&
          typeof htmlElement === "object" &&
          htmlElement !== null &&
          htmlElement.nodeType === 1 &&
          typeof htmlElement.nodeName === "string"; //DOM2
  }
  return false;
}

function isNode(node: any): boolean {
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

export {
  isBoolean,
  isJson,
  isFunction,
  isObject,
  isArray,
  isAscii,
  isInteger,
  isFloat,
  isNumber,
  isString,
  isHtmlElement,
  isNode
};
