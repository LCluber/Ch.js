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
  if (func) {
    const getType = {};
    return func && getType.toString.call(func) === "[object Function]";
  }
  return false;
}

function isObject(object: any): boolean {
  return object !== null && typeof object === "object" && !isArray(object);
}

function isArray(array: any): boolean {
  return array !== null && array.constructor === Array;
}

function isAscii(code: any, extended: boolean = true): boolean {
  if (isInteger(code, false)) {
    return (extended && code >= 0 && code <= 255) || (code >= 0 && code <= 127);
  }
  return false;
}

function isInteger(number: any, typeCheck: boolean = true): boolean {
  const int = parseInt(<string>number, 10);
  return typeCheck ? number === int : number == int;
}

function isFloat(number: any, typeCheck: boolean = true): boolean {
  const moduloCheck = number % 1 !== 0;
  return typeCheck ? (Number(number) === number && moduloCheck) : (Number(number) == number && moduloCheck);
}

// No type checking. Works with '8e4', '+true', '0x44' etc
function isNumeric(number: any): boolean {
  return !isNaN(number - parseFloat(number));
}

function isNumber(number: any, typeCheck: boolean = true): boolean {
  return typeCheck ? Number(number) === number : isNumeric(number);
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

function isHtmlEventAttribute(htmlEventAttribute: any): boolean {
  switch (htmlEventAttribute) {
    case "onafterprint": // run after the document is printed
    case "onbeforeprint": // run before the document is printed
    case "onbeforeunload": // run when the document is about to be unloaded
    case "onerror": // run when an error occurs
    case "onhashchange": // run when there has been changes to the anchor part of the a URL
    case "onload": // Fires after page is finished loading
    case "onmessage": // run when the message is triggered
    case "onoffline": // run when the browser starts to work offline
    case "ononline": // run when the browser starts to work case "online
    case "onpagehide": // run when a user navigates away from a page
    case "onpageshow": // run when a user navigates to a page
    case "onpopstate": // run when the window's history changes
    case "onresize": // Fires whene browser window is resized
    case "onstorage": // run when a Web Storage area is updated
    case "onunload": // Fires once a page has unloaded (or the browser window has been closed)
    case "onblur": // Fires the moment that the element loses focus
    case "onchange": // Fires the moment when the value of the element is changed
    case "oncontextmenu": // Script to be run when a context menu is triggered
    case "onfocus": // Fires the moment when the element gets focus
    case "oninput": // Script to be run when an element gets user input
    case "oninvalid": // Script to be run when an element is invalid
    case "onreset": // Fires when the Reset button in a form is clicked
    case "onsearch": // Fires when the user writes something in a search field (for <input="search">)
    case "onselect": // Fires after some text has been selected in an element
    case "onsubmit": // Fires when a form is submitted
    case "onkeydown": // script	Fires when a user is pressing a key
    case "onkeypress": // script	Fires when a user presses a key
    case "onkeyup": // script	Fires when a user releases a key
    case "onclick": //	Fires on a mouse click on the element
    case "ondblclick": //	Fires on a mouse double-click on the element
    case "onmousedown": //	Fires when a mouse button is pressed down on an element
    case "onmousemove": //	Fires when the mouse pointer is moving while it is over an element
    case "onmouseout": //	Fires when the mouse pointer moves out of an element
    case "onmouseover": //	Fires when the mouse pointer moves over an element
    case "onmouseup": //	Fires when a mouse button is released over an element
    case "onmousewheel": //	Deprecated. Use the onwheel attribute instead
    case "onwheel": //	Fires when the mouse wheel rolls up or down over an element
    case "ondrag": // Script to be run when an element is dragged
    case "ondragend": // Script to be run at the end of a drag operation
    case "ondragenter": // Script to be run when an element has been dragged to a valid drop target
    case "ondragleave": // Script to be run when an element leaves a valid drop target
    case "ondragover": // Script to be run when an element is being dragged over a valid drop target
    case "ondragstart": // Script to be run at the start of a drag operation
    case "ondrop": // Script to be run when dragged element is being dropped
    case "onscroll": // Script to be run when an element's scrollbar is being scrolled
    case "oncopy": // Fires when the user copies the content of an element
    case "oncut": // Fires when the user cuts the content of an element
    case "onpaste": // Fires when the user pastes some content in an element
    case "onabort": // run on abort
    case "oncanplay": // run when a file is ready to start playing (when it has buffered enough to begin)
    case "oncanplaythrough": // run when a file can be played all the way to the end without pausing for buffering
    case "oncuechange": // run when the cue changes in a <track> element
    case "ondurationchange": // run when the length of the media changes
    case "onemptied": // run when something bad happens and the file is suddenly unavailable (like unexpectedly disconnects)
    case "onended": // run when the media has reach the end (a useful event for messages like "thanks for listening")
    case "onerror": // run when an error occurs when the file is being loaded
    case "onloadeddata": // run when media data is loaded
    case "onloadedmetadata": // run when meta data (like dimensions and duration) are loaded
    case "onloadstart": // run just as the file begins to load before anything is actually loaded
    case "onpause": // run when the media is paused either by the user or programmatically
    case "onplay": // run when the media is ready to start playing
    case "onplaying": // run when the media actually has started playing
    case "onprogress": // run when the browser is in the process of getting the media data
    case "onratechange": // run each time the playback rate changes (like when a user switches to a slow motion or fast "forward mode)
    case "onseeked": // run when the seeking attribute is set to false indicating that seeking has ended
    case "onseeking": // run when the seeking attribute is set to true indicating that seeking is active
    case "onstalled": // run when the browser is unable to fetch the media data for whatever reason
    case "onsuspend": // run when fetching the media data is stopped before it is completely loaded for whatever reason
    case "ontimeupdate": // run when the playing position has changed (like when the user fast forwards to a different point in the media)
    case "onvolumechange": // run each time the volume is changed which (includes setting the volume to "mute")
    case "onwaiting": // run when the media has paused but is expected to resume (like when the media pauses to buffer more data)
    case "ontoggle": //	Fires when the user opens or closes the <details> element"
      return true;
    default:
      return false;
  }
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

function isRegex(regex: any, typeCheck: boolean = true): boolean {
  if (typeCheck) {
    return regex instanceof RegExp ? true : false;
  } else {
    try {
      new RegExp(regex);
    } catch (e) {
      return false;
    }
    return true;
  }
}

function isEven(number: any, typeCheck: boolean = true): boolean {
  return isInteger(number, typeCheck) && !(number & 1);
}

function isOdd(number: any, typeCheck: boolean = true): boolean {
  return isInteger(number, typeCheck) && number & 1 ? true : false;
}

function isOrigin(number: any, typeCheck: boolean = true): boolean {
  return typeCheck ? (number === 0 ? true : false) : (number == 0 ? true : false);
}

function isPositive(number: any, typeCheck: boolean = true): boolean {
  return isNumber(number, typeCheck) && number > 0 ? true : false;
}

function isNegative(number: any, typeCheck: boolean = true): boolean {
  return isNumber(number, typeCheck) && number < 0 ? true : false;
}

function isPowerOfTwo(number: any, typeCheck: boolean = true): boolean {
  return isInteger(number, typeCheck) && !isOrigin(number, typeCheck) && (number & (number - 1)) === 0;
}

function isEmail(email: any): boolean {
  var regex = /^(?=[a-z0-9@.!$%&'*+\/=?^_‘{|}~-]{6,254}$)(?=[a-z0-9.!#$%&'*+\/=?^_‘{|}~-]{1,64}@)[a-z0-9!#$%&'*+\/=?^‘{|}~]+(?:[\._-][a-z0-9!#$%&'*+\/=?^‘{|}~]+)*@(?:(?=[a-z0-9-]{1,63}\.)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?=[a-z0-9-]{2,63}$)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return regex.test(String(email).toLowerCase());
}

function isIpAddress(ipAddress: any): boolean {
  var regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return regex.test(ipAddress);
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
  isHtmlEventAttribute,
  isNode,
  isEven,
  isOdd,
  isOrigin,
  isPositive,
  isNegative,
  isPowerOfTwo,
  isRegex,
  isEmail,
  isIpAddress
};
