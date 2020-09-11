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
var Ch = (function (exports) {
  'use strict';

  var $ = require('../internals/export');

  var isObject = require('../internals/is-object');

  var isArray = require('../internals/is-array');

  var toAbsoluteIndex = require('../internals/to-absolute-index');

  var toLength = require('../internals/to-length');

  var toIndexedObject = require('../internals/to-indexed-object');

  var createProperty = require('../internals/create-property');

  var wellKnownSymbol = require('../internals/well-known-symbol');

  var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');

  var arrayMethodUsesToLength = require('../internals/array-method-uses-to-length');

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
  var USES_TO_LENGTH = arrayMethodUsesToLength('slice', {
    ACCESSORS: true,
    0: 0,
    1: 2
  });
  var SPECIES = wellKnownSymbol('species');
  var nativeSlice = [].slice;
  var max = Math.max; // `Array.prototype.slice` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects

  $({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
  }, {
    slice: function slice(start, end) {
      var O = toIndexedObject(this);
      var length = toLength(O.length);
      var k = toAbsoluteIndex(start, length);
      var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

      var Constructor, result, n;

      if (isArray(O)) {
        Constructor = O.constructor; // cross-realm fallback

        if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject(Constructor)) {
          Constructor = Constructor[SPECIES];
          if (Constructor === null) Constructor = undefined;
        }

        if (Constructor === Array || Constructor === undefined) {
          return nativeSlice.call(O, k, fin);
        }
      }

      result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));

      for (n = 0; k < fin; k++, n++) {
        if (k in O) createProperty(result, n, O[k]);
      }

      result.length = n;
      return result;
    }
  });

  var $$1 = require('../internals/export');

  var parseIntImplementation = require('../internals/number-parse-int'); // `parseInt` method
  // https://tc39.github.io/ecma262/#sec-parseint-string-radix


  $$1({
    global: true,
    forced: parseInt != parseIntImplementation
  }, {
    parseInt: parseIntImplementation
  });

  var $$2 = require('../internals/export');

  var exec = require('../internals/regexp-exec');

  $$2({
    target: 'RegExp',
    proto: true,
    forced: /./.exec !== exec
  }, {
    exec: exec
  });

  var $$3 = require('../internals/export');

  var $indexOf = require('../internals/array-includes').indexOf;

  var arrayMethodIsStrict = require('../internals/array-method-is-strict');

  var arrayMethodUsesToLength$1 = require('../internals/array-method-uses-to-length');

  var nativeIndexOf = [].indexOf;
  var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
  var STRICT_METHOD = arrayMethodIsStrict('indexOf');
  var USES_TO_LENGTH$1 = arrayMethodUsesToLength$1('indexOf', {
    ACCESSORS: true,
    1: 0
  }); // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof

  $$3({
    target: 'Array',
    proto: true,
    forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH$1
  }, {
    indexOf: function indexOf(searchElement
    /* , fromIndex = 0 */
    ) {
      return NEGATIVE_ZERO // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var TO_STRING_TAG_SUPPORT = require('../internals/to-string-tag-support');

  var redefine = require('../internals/redefine');

  var toString = require('../internals/object-to-string'); // `Object.prototype.toString` method
  // https://tc39.github.io/ecma262/#sec-object.prototype.tostring


  if (!TO_STRING_TAG_SUPPORT) {
    redefine(Object.prototype, 'toString', toString, {
      unsafe: true
    });
  }

  var redefine$1 = require('../internals/redefine');

  var DatePrototype = Date.prototype;
  var INVALID_DATE = 'Invalid Date';
  var TO_STRING = 'toString';
  var nativeDateToString = DatePrototype[TO_STRING];
  var getTime = DatePrototype.getTime; // `Date.prototype.toString` method
  // https://tc39.github.io/ecma262/#sec-date.prototype.tostring

  if (new Date(NaN) + '' != INVALID_DATE) {
    redefine$1(DatePrototype, TO_STRING, function toString() {
      var value = getTime.call(this); // eslint-disable-next-line no-self-compare

      return value === value ? nativeDateToString.call(this) : INVALID_DATE;
    });
  }

  var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic');

  var anObject = require('../internals/an-object');

  var toLength$1 = require('../internals/to-length');

  var requireObjectCoercible = require('../internals/require-object-coercible');

  var advanceStringIndex = require('../internals/advance-string-index');

  var regExpExec = require('../internals/regexp-exec-abstract'); // @@match logic


  fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
    return [// `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    }, // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;

      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength$1(rx.lastIndex), fullUnicode);
        n++;
      }

      return n === 0 ? null : A;
    }];
  });

  var DESCRIPTORS = require('../internals/descriptors');

  var defineProperty = require('../internals/object-define-property').f;

  var FunctionPrototype = Function.prototype;
  var FunctionPrototypeToString = FunctionPrototype.toString;
  var nameRE = /^\s*function ([^ (]*)/;
  var NAME = 'name'; // Function instances `.name` property
  // https://tc39.github.io/ecma262/#sec-function-instances-name

  if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
    defineProperty(FunctionPrototype, NAME, {
      configurable: true,
      get: function get() {
        try {
          return FunctionPrototypeToString.call(this).match(nameRE)[1];
        } catch (error) {
          return '';
        }
      }
    });
  }

  var DESCRIPTORS$1 = require('../internals/descriptors');

  var objectDefinePropertyModule = require('../internals/object-define-property');

  var regExpFlags = require('../internals/regexp-flags');

  var UNSUPPORTED_Y = require('../internals/regexp-sticky-helpers').UNSUPPORTED_Y; // `RegExp.prototype.flags` getter
  // https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags


  if (DESCRIPTORS$1 && (/./g.flags != 'g' || UNSUPPORTED_Y)) {
    objectDefinePropertyModule.f(RegExp.prototype, 'flags', {
      configurable: true,
      get: regExpFlags
    });
  }

  var redefine$2 = require('../internals/redefine');

  var anObject$1 = require('../internals/an-object');

  var fails = require('../internals/fails');

  var flags = require('../internals/regexp-flags');

  var TO_STRING$1 = 'toString';
  var RegExpPrototype = RegExp.prototype;
  var nativeToString = RegExpPrototype[TO_STRING$1];
  var NOT_GENERIC = fails(function () {
    return nativeToString.call({
      source: 'a',
      flags: 'b'
    }) != '/a/b';
  }); // FF44- RegExp#toString has a wrong name

  var INCORRECT_NAME = nativeToString.name != TO_STRING$1; // `RegExp.prototype.toString` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring

  if (NOT_GENERIC || INCORRECT_NAME) {
    redefine$2(RegExp.prototype, TO_STRING$1, function toString() {
      var R = anObject$1(this);
      var p = String(R.source);
      var rf = R.flags;
      var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
      return '/' + p + '/' + f;
    }, {
      unsafe: true
    });
  }

  var $$4 = require('../internals/export');

  var fails$1 = require('../internals/fails');

  var isArray$1 = require('../internals/is-array');

  var isObject$1 = require('../internals/is-object');

  var toObject = require('../internals/to-object');

  var toLength$2 = require('../internals/to-length');

  var createProperty$1 = require('../internals/create-property');

  var arraySpeciesCreate = require('../internals/array-species-create');

  var arrayMethodHasSpeciesSupport$1 = require('../internals/array-method-has-species-support');

  var wellKnownSymbol$1 = require('../internals/well-known-symbol');

  var V8_VERSION = require('../internals/engine-v8-version');

  var IS_CONCAT_SPREADABLE = wellKnownSymbol$1('isConcatSpreadable');
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'; // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679

  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$1(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });
  var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$1('concat');

  var isConcatSpreadable = function isConcatSpreadable(O) {
    if (!isObject$1(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray$1(O);
  };

  var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species

  $$4({
    target: 'Array',
    proto: true,
    forced: FORCED
  }, {
    concat: function concat(arg) {
      // eslint-disable-line no-unused-vars
      var O = toObject(this);
      var A = arraySpeciesCreate(O, 0);
      var n = 0;
      var i, k, length, len, E;

      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];

        if (isConcatSpreadable(E)) {
          len = toLength$2(E.length);
          if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

          for (k = 0; k < len; k++, n++) {
            if (k in E) createProperty$1(A, n, E[k]);
          }
        } else {
          if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          createProperty$1(A, n++, E);
        }
      }

      A.length = n;
      return A;
    }
  });

  var fixRegExpWellKnownSymbolLogic$1 = require('../internals/fix-regexp-well-known-symbol-logic');

  var anObject$2 = require('../internals/an-object');

  var toObject$1 = require('../internals/to-object');

  var toLength$3 = require('../internals/to-length');

  var toInteger = require('../internals/to-integer');

  var requireObjectCoercible$1 = require('../internals/require-object-coercible');

  var advanceStringIndex$1 = require('../internals/advance-string-index');

  var regExpExec$1 = require('../internals/regexp-exec-abstract');

  var max$1 = Math.max;
  var min = Math.min;
  var floor = Math.floor;
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

  var maybeToString = function maybeToString(it) {
    return it === undefined ? it : String(it);
  }; // @@replace logic


  fixRegExpWellKnownSymbolLogic$1('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
    var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
    var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
    return [// `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible$1(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
    }, // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0 || typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject$2(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;

      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }

      var results = [];

      while (true) {
        var result = regExpExec$1(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$3(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;

      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max$1(min(toInteger(result.index), S.length), 0);
        var captures = []; // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

        for (var j = 1; j < result.length; j++) {
          captures.push(maybeToString(result[j]));
        }

        var namedCaptures = result.groups;

        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }

        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + S.slice(nextSourcePosition);
    }]; // https://tc39.github.io/ecma262/#sec-getsubstitution

    function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
      var tailPos = position + matched.length;
      var m = captures.length;
      var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

      if (namedCaptures !== undefined) {
        namedCaptures = toObject$1(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
      }

      return nativeReplace.call(replacement, symbols, function (match, ch) {
        var capture;

        switch (ch.charAt(0)) {
          case '$':
            return '$';

          case '&':
            return matched;

          case '`':
            return str.slice(0, position);

          case "'":
            return str.slice(tailPos);

          case '<':
            capture = namedCaptures[ch.slice(1, -1)];
            break;

          default:
            // \d\d?
            var n = +ch;
            if (n === 0) return match;

            if (n > m) {
              var f = floor(n / 10);
              if (f === 0) return match;
              if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
              return match;
            }

            capture = captures[n - 1];
        }

        return capture === undefined ? '' : capture;
      });
    }
  });

  var DESCRIPTORS$2 = require('../internals/descriptors');

  var global = require('../internals/global');

  var isForced = require('../internals/is-forced');

  var inheritIfRequired = require('../internals/inherit-if-required');

  var defineProperty$1 = require('../internals/object-define-property').f;

  var getOwnPropertyNames = require('../internals/object-get-own-property-names').f;

  var isRegExp = require('../internals/is-regexp');

  var getFlags = require('../internals/regexp-flags');

  var stickyHelpers = require('../internals/regexp-sticky-helpers');

  var redefine$3 = require('../internals/redefine');

  var fails$2 = require('../internals/fails');

  var setInternalState = require('../internals/internal-state').set;

  var setSpecies = require('../internals/set-species');

  var wellKnownSymbol$2 = require('../internals/well-known-symbol');

  var MATCH = wellKnownSymbol$2('match');
  var NativeRegExp = global.RegExp;
  var RegExpPrototype$1 = NativeRegExp.prototype;
  var re1 = /a/g;
  var re2 = /a/g; // "new" should create a new object, old webkit bug

  var CORRECT_NEW = new NativeRegExp(re1) !== re1;
  var UNSUPPORTED_Y$1 = stickyHelpers.UNSUPPORTED_Y;
  var FORCED$1 = DESCRIPTORS$2 && isForced('RegExp', !CORRECT_NEW || UNSUPPORTED_Y$1 || fails$2(function () {
    re2[MATCH] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  })); // `RegExp` constructor
  // https://tc39.github.io/ecma262/#sec-regexp-constructor

  if (FORCED$1) {
    var RegExpWrapper = function RegExp(pattern, flags) {
      var thisIsRegExp = this instanceof RegExpWrapper;
      var patternIsRegExp = isRegExp(pattern);
      var flagsAreUndefined = flags === undefined;
      var sticky;

      if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
        return pattern;
      }

      if (CORRECT_NEW) {
        if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
      } else if (pattern instanceof RegExpWrapper) {
        if (flagsAreUndefined) flags = getFlags.call(pattern);
        pattern = pattern.source;
      }

      if (UNSUPPORTED_Y$1) {
        sticky = !!flags && flags.indexOf('y') > -1;
        if (sticky) flags = flags.replace(/y/g, '');
      }

      var result = inheritIfRequired(CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$1, RegExpWrapper);
      if (UNSUPPORTED_Y$1 && sticky) setInternalState(result, {
        sticky: sticky
      });
      return result;
    };

    var proxy = function proxy(key) {
      key in RegExpWrapper || defineProperty$1(RegExpWrapper, key, {
        configurable: true,
        get: function get() {
          return NativeRegExp[key];
        },
        set: function set(it) {
          NativeRegExp[key] = it;
        }
      });
    };

    var keys = getOwnPropertyNames(NativeRegExp);
    var index = 0;

    while (keys.length > index) {
      proxy(keys[index++]);
    }

    RegExpPrototype$1.constructor = RegExpWrapper;
    RegExpWrapper.prototype = RegExpPrototype$1;
    redefine$3(global, 'RegExp', RegExpWrapper);
  } // https://tc39.github.io/ecma262/#sec-get-regexp-@@species


  setSpecies('RegExp');

  var fixRegExpWellKnownSymbolLogic$2 = require('../internals/fix-regexp-well-known-symbol-logic');

  var isRegExp$1 = require('../internals/is-regexp');

  var anObject$3 = require('../internals/an-object');

  var requireObjectCoercible$2 = require('../internals/require-object-coercible');

  var speciesConstructor = require('../internals/species-constructor');

  var advanceStringIndex$2 = require('../internals/advance-string-index');

  var toLength$4 = require('../internals/to-length');

  var callRegExpExec = require('../internals/regexp-exec-abstract');

  var regexpExec = require('../internals/regexp-exec');

  var fails$3 = require('../internals/fails');

  var arrayPush = [].push;
  var min$1 = Math.min;
  var MAX_UINT32 = 0xFFFFFFFF; // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError

  var SUPPORTS_Y = !fails$3(function () {
    return !RegExp(MAX_UINT32, 'y');
  }); // @@split logic

  fixRegExpWellKnownSymbolLogic$2('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;

    if ('abbc'.split(/(b)*/)[1] == 'c' || 'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function internalSplit(separator, limit) {
        var string = String(requireObjectCoercible$2(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

        if (!isRegExp$1(separator)) {
          return nativeSplit.call(string, separator, lim);
        }

        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
        var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;

        while (match = regexpExec.call(separatorCopy, string)) {
          lastIndex = separatorCopy.lastIndex;

          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= lim) break;
          }

          if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }

        if (lastLastIndex === string.length) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));

        return output.length > lim ? output.slice(0, lim) : output;
      }; // Chakra, V8

    } else if ('0'.split(undefined, 0).length) {
      internalSplit = function internalSplit(separator, limit) {
        return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
      };
    } else internalSplit = nativeSplit;

    return [// `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible$2(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
    }, // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;
      var rx = anObject$3(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g'); // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.

      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];

      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;

        if (z === null || (e = min$1(toLength$4(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
          q = advanceStringIndex$2(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;

          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }

          q = p = e;
        }
      }

      A.push(S.slice(p));
      return A;
    }];
  }, !SUPPORTS_Y);

  var $$5 = require('../internals/export');

  var $trim = require('../internals/string-trim').trim;

  var forcedStringTrimMethod = require('../internals/string-trim-forced'); // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim


  $$5({
    target: 'String',
    proto: true,
    forced: forcedStringTrimMethod('trim')
  }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  var DESCRIPTORS$3 = require('../internals/descriptors');

  var global$1 = require('../internals/global');

  var isForced$1 = require('../internals/is-forced');

  var redefine$4 = require('../internals/redefine');

  var has = require('../internals/has');

  var classof = require('../internals/classof-raw');

  var inheritIfRequired$1 = require('../internals/inherit-if-required');

  var toPrimitive = require('../internals/to-primitive');

  var fails$4 = require('../internals/fails');

  var create = require('../internals/object-create');

  var getOwnPropertyNames$1 = require('../internals/object-get-own-property-names').f;

  var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;

  var defineProperty$2 = require('../internals/object-define-property').f;

  var trim = require('../internals/string-trim').trim;

  var NUMBER = 'Number';
  var NativeNumber = global$1[NUMBER];
  var NumberPrototype = NativeNumber.prototype; // Opera ~12 has broken Object#toString

  var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER; // `ToNumber` abstract operation
  // https://tc39.github.io/ecma262/#sec-tonumber

  var toNumber = function toNumber(argument) {
    var it = toPrimitive(argument, false);
    var first, third, radix, maxCode, digits, length, index, code;

    if (typeof it == 'string' && it.length > 2) {
      it = trim(it);
      first = it.charCodeAt(0);

      if (first === 43 || first === 45) {
        third = it.charCodeAt(2);
        if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
      } else if (first === 48) {
        switch (it.charCodeAt(1)) {
          case 66:
          case 98:
            radix = 2;
            maxCode = 49;
            break;
          // fast equal of /^0b[01]+$/i

          case 79:
          case 111:
            radix = 8;
            maxCode = 55;
            break;
          // fast equal of /^0o[0-7]+$/i

          default:
            return +it;
        }

        digits = it.slice(2);
        length = digits.length;

        for (index = 0; index < length; index++) {
          code = digits.charCodeAt(index); // parseInt parses a string to a first unavailable symbol
          // but ToNumber should return NaN if a string contains unavailable symbols

          if (code < 48 || code > maxCode) return NaN;
        }

        return parseInt(digits, radix);
      }
    }

    return +it;
  }; // `Number` constructor
  // https://tc39.github.io/ecma262/#sec-number-constructor


  if (isForced$1(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
    var NumberWrapper = function Number(value) {
      var it = arguments.length < 1 ? 0 : value;
      var dummy = this;
      return dummy instanceof NumberWrapper // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails$4(function () {
        NumberPrototype.valueOf.call(dummy);
      }) : classof(dummy) != NUMBER) ? inheritIfRequired$1(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
    };

    for (var keys$1 = DESCRIPTORS$3 ? getOwnPropertyNames$1(NativeNumber) : ( // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys$1.length > j; j++) {
      if (has(NativeNumber, key = keys$1[j]) && !has(NumberWrapper, key)) {
        defineProperty$2(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
      }
    }

    NumberWrapper.prototype = NumberPrototype;
    NumberPrototype.constructor = NumberWrapper;
    redefine$4(global$1, NUMBER, NumberWrapper);
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function isBoolean(bool) {
    return typeof bool === "boolean";
  }

  function isJson(str) {
    if (!isString(str)) {
      return false;
    }

    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }

    return true;
  }

  function isFunction(func) {
    if (func) {
      var getType = {};
      return func && getType.toString.call(func) === "[object Function]";
    }

    return false;
  }

  function isObject$2(object) {
    return object !== null && _typeof(object) === "object" && !isArray$2(object);
  }

  function isArray$2(array) {
    return array !== null && array.constructor === Array;
  }

  function isAscii(code) {
    var extended = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (isInteger(code, false)) {
      return extended && code >= 0 && code <= 255 || code >= 0 && code <= 127;
    }

    return false;
  }

  function isInteger(number) {
    var typeCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var _int = parseInt(number, 10);

    return typeCheck ? number === _int : number == _int;
  }

  function isFloat(number) {
    var typeCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var moduloCheck = number % 1 !== 0;
    return typeCheck ? Number(number) === number && moduloCheck : Number(number) == number && moduloCheck;
  }

  function isNumber(number) {
    return isInteger(number) || isFloat(number);
  }

  function isString(string) {
    return typeof string === "string";
  }

  function isHtmlElement(htmlElement) {
    if (htmlElement) {
      return (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === "object" ? htmlElement instanceof HTMLElement : htmlElement && _typeof(htmlElement) === "object" && htmlElement !== null && htmlElement.nodeType === 1 && typeof htmlElement.nodeName === "string";
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
      return (typeof Node === "undefined" ? "undefined" : _typeof(Node)) === "object" ? node instanceof Node : node && _typeof(node) === "object" && typeof node.nodeType === "number" && typeof node.nodeName === "string";
    }

    return false;
  }

  function isRegex(regex) {
    var typeCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

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

  function isEven(number) {
    return isInteger(number) && !(number & 1);
  }

  function isOdd(number) {
    return isInteger(number) && number & 1 ? true : false;
  }

  function isOrigin(number) {
    return number === 0 ? true : false;
  }

  function isPositive(number) {
    return isNumber(number) && number > 0 ? true : false;
  }

  function isNegative(number) {
    return number < 0 ? true : false;
  }

  function isEmail(email) {
    var regex = /^(?=[a-z0-9@.!$%&'*+\/=?^_‘{|}~-]{6,254}$)(?=[a-z0-9.!#$%&'*+\/=?^_‘{|}~-]{1,64}@)[a-z0-9!#$%&'*+\/=?^‘{|}~]+(?:[\._-][a-z0-9!#$%&'*+\/=?^‘{|}~]+)*@(?:(?=[a-z0-9-]{1,63}\.)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?=[a-z0-9-]{2,63}$)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    return regex.test(String(email).toLowerCase());
  }

  function isIpAddress(ipAddress) {
    var regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return regex.test(ipAddress);
  }

  exports.isArray = isArray$2;
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
  exports.isObject = isObject$2;
  exports.isOdd = isOdd;
  exports.isOrigin = isOrigin;
  exports.isPositive = isPositive;
  exports.isRegex = isRegex;
  exports.isString = isString;

  return exports;

}({}));
