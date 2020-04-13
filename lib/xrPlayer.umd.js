(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.xrPlayer = factory());
}(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	var _freeGlobal = freeGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = _freeGlobal || freeSelf || Function('return this')();

	var _root = root;

	/** Built-in value references. */
	var Symbol = _root.Symbol;

	var _Symbol = Symbol;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	var _getRawTag = getRawTag;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$1.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString$1.call(value);
	}

	var _objectToString = objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag$1 && symToStringTag$1 in Object(value))
	    ? _getRawTag(value)
	    : _objectToString(value);
	}

	var _baseGetTag = baseGetTag;

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var isObject_1 = isObject;

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject_1(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = _baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	var isFunction_1 = isFunction;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = _root['__core-js_shared__'];

	var _coreJsData = coreJsData;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	var _isMasked = isMasked;

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	var _toSource = toSource;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto$1 = Function.prototype,
	    objectProto$2 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$1 = funcProto$1.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject_1(value) || _isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(_toSource(value));
	}

	var _baseIsNative = baseIsNative;

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	var _getValue = getValue;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = _getValue(object, key);
	  return _baseIsNative(value) ? value : undefined;
	}

	var _getNative = getNative;

	var defineProperty = (function() {
	  try {
	    var func = _getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	var _defineProperty = defineProperty;

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && _defineProperty) {
	    _defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	var _baseAssignValue = baseAssignValue;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	var eq_1 = eq;

	/** Used for built-in method references. */
	var objectProto$3 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty$2.call(object, key) && eq_1(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    _baseAssignValue(object, key, value);
	  }
	}

	var _assignValue = assignValue;

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      _baseAssignValue(object, key, newValue);
	    } else {
	      _assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	var _copyObject = copyObject;

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	var identity_1 = identity;

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	var _apply = apply;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return _apply(func, this, otherArgs);
	  };
	}

	var _overRest = overRest;

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	var constant_1 = constant;

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !_defineProperty ? identity_1 : function(func, string) {
	  return _defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant_1(string),
	    'writable': true
	  });
	};

	var _baseSetToString = baseSetToString;

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	var _shortOut = shortOut;

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = _shortOut(_baseSetToString);

	var _setToString = setToString;

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return _setToString(_overRest(func, start, identity_1), func + '');
	}

	var _baseRest = baseRest;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	var isLength_1 = isLength;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength_1(value.length) && !isFunction_1(value);
	}

	var isArrayLike_1 = isArrayLike;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER$1 = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER$1 : length;

	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}

	var _isIndex = isIndex;

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject_1(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike_1(object) && _isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq_1(object[index], value);
	  }
	  return false;
	}

	var _isIterateeCall = isIterateeCall;

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return _baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	var _createAssigner = createAssigner;

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	var _baseTimes = baseTimes;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	var isObjectLike_1 = isObjectLike;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
	}

	var _baseIsArguments = baseIsArguments;

	/** Used for built-in method references. */
	var objectProto$4 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto$4.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
	  return isObjectLike_1(value) && hasOwnProperty$3.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	var isArguments_1 = isArguments;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	var isArray_1 = isArray;

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	var stubFalse_1 = stubFalse;

	var isBuffer_1 = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports =  exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? _root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse_1;

	module.exports = isBuffer;
	});

	/** `Object#toString` result references. */
	var argsTag$1 = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag$1 = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike_1(value) &&
	    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
	}

	var _baseIsTypedArray = baseIsTypedArray;

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	var _baseUnary = baseUnary;

	var _nodeUtil = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports =  exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && _freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;
	});

	/* Node.js helper references. */
	var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

	var isTypedArray_1 = isTypedArray;

	/** Used for built-in method references. */
	var objectProto$5 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray_1(value),
	      isArg = !isArr && isArguments_1(value),
	      isBuff = !isArr && !isArg && isBuffer_1(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? _baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty$4.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           _isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _arrayLikeKeys = arrayLikeKeys;

	/** Used for built-in method references. */
	var objectProto$6 = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$6;

	  return value === proto;
	}

	var _isPrototype = isPrototype;

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _nativeKeysIn = nativeKeysIn;

	/** Used for built-in method references. */
	var objectProto$7 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject_1(object)) {
	    return _nativeKeysIn(object);
	  }
	  var isProto = _isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty$5.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeysIn = baseKeysIn;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
	}

	var keysIn_1 = keysIn;

	/**
	 * This method is like `_.assign` except that it iterates over own and
	 * inherited source properties.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @alias extend
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assign
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assignIn({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
	 */
	var assignIn = _createAssigner(function(object, source) {
	  _copyObject(source, keysIn_1(source), object);
	});

	var assignIn_1 = assignIn;

	var defaultOptions = {
	  width: 600,
	  height: 400,
	  currentTime: 0,
	  volume: 0.5,
	  autoplay: false,
	  // 是否是播放页
	  playerPage: true,
	  debug:  true ,
	  basePath: "",
	  baseHost: ""
	}; // {basePath}会被替换成当前js引用路径

	var defaultCss = [{
	  name: "player",
	  dev: "{baseHost}/public/player.css",
	  pro: "{basePath}/player.css"
	}, {
	  name: "xr_icon",
	  dev: "//at.alicdn.com/t/font_1741137_x7unuco9bf8.css",
	  pro: "//at.alicdn.com/t/font_1741137_x7unuco9bf8.css"
	}];

	// import 
	function canvas(parentDom) {
	  var createChild = this.common.createChild;
	  var canvasDom = createChild("canvas", "xr-video-canvas");
	  canvas.width = this.videoEl.width;
	  canvas.height = this.videoEl.height;
	  parentDom && parentDom.appendChild(canvasDom);
	  this.domEl.canvasDom = canvasDom;
	  return canvasDom;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	var _overArg = overArg;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = _overArg(Object.keys, Object);

	var _nativeKeys = nativeKeys;

	/** Used for built-in method references. */
	var objectProto$8 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!_isPrototype(object)) {
	    return _nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty$6.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeys = baseKeys;

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
	}

	var keys_1 = keys;

	/** Used for built-in method references. */
	var objectProto$9 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assign({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var assign = _createAssigner(function(object, source) {
	  if (_isPrototype(source) || isArrayLike_1(source)) {
	    _copyObject(source, keys_1(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty$7.call(source, key)) {
	      _assignValue(object, key, source[key]);
	    }
	  }
	});

	var assign_1 = assign;

	function setPoster(poster) {
	  this.domEl.posterDom.setAttribute("src", poster || this.options.poster);
	}
	function hidePoster() {
	  this.domEl.posterWarpDom.style.display = "none";
	}

	function poster(parentDom) {
	  var createChild = this.common.createChild;
	  var posterWarpDom = createChild("div", "xr-poster-wrap");
	  var posterDom = createChild("img", "xr-poster", posterWarpDom);
	  parentDom && parentDom.appendChild(posterWarpDom);
	  var domObj = {
	    posterWarpDom: posterWarpDom,
	    posterDom: posterDom
	  };
	  this.domEl = assign_1(this.domEl, domObj);
	  setPoster.call(this);
	  return domObj;
	}

	function shadow(parentDom) {
	  var createChild = this.common.createChild; // 屏幕蒙层

	  var shadowDom = createChild("div", "xr-player-shadow"); // 屏幕中央 播放暂停按钮

	  var startBarDom = createChild("div", "xr-startBar xr_icon xr_icon_bofangliang", shadowDom);
	  parentDom && parentDom.appendChild(shadowDom);
	  var domObj = {
	    shadowDom: shadowDom,
	    startBarDom: startBarDom
	  };
	  this.domEl = assign_1(this.domEl, domObj);
	  return domObj;
	}

	function progress(parentDom) {
	  var createChild = this.common.createChild;
	  var progressBarContainerDom = createChild("div", "xr-progress_bar_container");
	  var progressListDom = createChild("div", "xr-progress_list", progressBarContainerDom);
	  var progressLineDom = createChild("div", "xr-progress_line", progressListDom);
	  var progressCurrentCircleDom = createChild("div", "xr-progress_currentCircle", progressLineDom); // 进度条

	  parentDom && parentDom.appendChild(progressBarContainerDom);
	  return {
	    progressBarContainerDom: progressBarContainerDom,
	    progressListDom: progressListDom,
	    progressLineDom: progressLineDom,
	    progressCurrentCircleDom: progressCurrentCircleDom
	  };
	}

	function left_control(parentDom) {
	  var createChild = this.common.createChild;
	  var leftControlDom = createChild("div", "xr-left-control");
	  parentDom && parentDom.appendChild(leftControlDom);
	  return leftControlDom;
	}

	function right_control(parentDom) {
	  var createChild = this.common.createChild;
	  var rightControlDom = createChild("div", "xr-right-control");
	  parentDom && parentDom.appendChild(rightControlDom);
	  return rightControlDom;
	}

	function play(parentDom) {
	  var createChild = this.common.createChild;
	  var controlPlayDom = createChild("span", "xr-control-play");
	  this.common.addClass.call(controlPlayDom, "xr_icon xr_icon_play");
	  parentDom && parentDom.appendChild(controlPlayDom);
	  return controlPlayDom;
	}

	function time(parentDom) {
	  var createChild = this.common.createChild;
	  var proLinesDom = createChild("div", "xr-proLines");
	  var currentDom = createChild("span", "xr-control-current");
	  var durationDom = createChild("span", "xr-control-duration");
	  var proLinesLineDom = document.createTextNode("/");
	  currentDom.innerHTML = "00:00:00";
	  durationDom.innerHTML = "00:00:00";
	  proLinesDom.appendChild(currentDom);
	  proLinesDom.appendChild(proLinesLineDom);
	  proLinesDom.appendChild(durationDom);
	  parentDom && parentDom.appendChild(proLinesDom);
	  return {
	    proLinesDom: proLinesDom,
	    currentDom: currentDom,
	    durationDom: durationDom,
	    proLinesLineDom: proLinesLineDom
	  };
	}

	function voice(parentDom) {
	  var createChild = this.common.createChild;
	  var voiceMarkDom = createChild("div", "xr-control-voice-mark xr_icon xr_icon_sound-on");
	  var voiceDom = createChild("div", "xr-control-voice");
	  var voiceLineDom = createChild("div", "xr-voiceline", voiceDom);
	  var voiceDragDom = createChild("div", "xr-voice-drag", voiceLineDom);
	  var voiceOP = document.createDocumentFragment();
	  voiceOP.appendChild(voiceMarkDom);
	  voiceOP.appendChild(voiceDom);
	  parentDom && parentDom.appendChild(voiceOP);
	  return {
	    voiceMarkDom: voiceMarkDom,
	    voiceDom: voiceDom,
	    voiceLineDom: voiceLineDom,
	    voiceDragDom: voiceDragDom,
	    voiceOP: voiceOP
	  };
	}

	function full(parentDom) {
	  var createChild = this.common.createChild;
	  var fullDom = createChild("span", "xr-control-full xr_icon xr_icon_expand-arrows");
	  parentDom && parentDom.appendChild(fullDom);
	  return fullDom;
	}

	function control(parentDom) {
	  var createChild = this.common.createChild;
	  var createBtn = this.common.createBtn;
	  var controlWrapDom = createChild("div", "xr-control-wrap");
	  var controlDom = createChild("div", "xr-control", controlWrapDom); // 进度条

	  var _progress$call = progress.call(this, controlDom),
	      progressBarContainerDom = _progress$call.progressBarContainerDom,
	      progressListDom = _progress$call.progressListDom,
	      progressLineDom = _progress$call.progressLineDom,
	      progressCurrentCircleDom = _progress$call.progressCurrentCircleDom; // 左右控制器


	  var leftControlDom = left_control.call(this, controlDom);
	  var rightControlDom = right_control.call(this, controlDom); // ---各种单独的---
	  // 播放按钮

	  var controlPlayDom = play.call(this); // 时间

	  var _time$call = time.call(this),
	      proLinesDom = _time$call.proLinesDom,
	      currentDom = _time$call.currentDom,
	      durationDom = _time$call.durationDom,
	      proLinesLineDom = _time$call.proLinesLineDom; // 音量


	  var _voice$call = voice.call(this),
	      voiceOP = _voice$call.voiceOP,
	      voiceMarkDom = _voice$call.voiceMarkDom,
	      voiceDom = _voice$call.voiceDom,
	      voiceLineDom = _voice$call.voiceLineDom,
	      voiceDragDom = _voice$call.voiceDragDom; // 全屏


	  var fullDom = full.call(this); // 左控制器 ---

	  createBtn(controlPlayDom, leftControlDom);
	  createBtn(proLinesDom, leftControlDom); // 右控制器 ---

	  createBtn(voiceOP, rightControlDom);
	  createBtn(fullDom, rightControlDom);
	  parentDom && parentDom.appendChild(controlWrapDom);
	  var domObj = {
	    controlWrapDom: controlWrapDom,
	    controlDom: controlDom,
	    progressBarContainerDom: progressBarContainerDom,
	    progressListDom: progressListDom,
	    progressLineDom: progressLineDom,
	    progressCurrentCircleDom: progressCurrentCircleDom,
	    leftControlDom: leftControlDom,
	    rightControlDom: rightControlDom,
	    controlPlayDom: controlPlayDom,
	    proLinesDom: proLinesDom,
	    currentDom: currentDom,
	    durationDom: durationDom,
	    proLinesLineDom: proLinesLineDom,
	    voiceOP: voiceOP,
	    voiceMarkDom: voiceMarkDom,
	    voiceDom: voiceDom,
	    voiceLineDom: voiceLineDom,
	    voiceDragDom: voiceDragDom,
	    fullDom: fullDom
	  };
	  this.domEl = assign_1(this.domEl, domObj);
	  return domObj;
	}

	function loadCss(url) {
	  var head = document.getElementsByTagName('head')[0];
	  var link = document.createElement('link');
	  link.type = 'text/css';
	  link.rel = 'stylesheet';
	  link.href = url;
	  head.appendChild(link);
	}
	function createChild(NodeName, className, parentNode) {
	  var nextChild = document.createElement(NodeName);
	  className && (nextChild.className = className);
	  parentNode && parentNode.appendChild(nextChild);
	  return nextChild;
	} // 创建控制器子功能容器

	function createBtn(Node, parentNode) {
	  var controlBtn = createChild("div", "xr-control-btn", parentNode);
	  controlBtn.appendChild(Node);
	  return controlBtn;
	}

	function getClassNameArr(className) {
	  if (typeof className != "string") {
	    throw Error("className type is not string");
	  }

	  return className.replace("  ", " ").split(" ");
	}

	function addClass(name) {
	  var classNameArr = getClassNameArr(this.className);

	  if (name.split(" ").length < 2) {
	    if (!(classNameArr.indexOf(name.trim()) !== -1)) {
	      classNameArr.push(name);
	    }
	  } else {
	    var nameArr = getClassNameArr(name);
	    nameArr.map(function (item) {
	      if (!(classNameArr.indexOf(item.trim()) !== -1)) {
	        classNameArr.push(item);
	      }
	    });
	  }

	  this.className = classNameArr.join(" ");
	  return this;
	}
	function removeClass(name) {
	  var classNameArr = getClassNameArr(this.className);
	  var resArr = classNameArr.map(function (item) {
	    if (item != name) {
	      return item;
	    }
	  });
	  this.className = resArr.join(" ");
	  return this;
	} // 时长换算 秒换算为时分秒

	var Convert = function Convert(seconds) {
	  var hh, mm, ss;

	  if (seconds == null || seconds < 0) {
	    return;
	  }

	  hh = seconds / 3600 | 0;
	  seconds = parseInt(seconds) - hh * 3600;

	  if (parseInt(hh) < 10) {
	    hh = "0" + hh;
	  }

	  mm = seconds / 60 | 0;
	  ss = parseInt(seconds) - mm * 60;

	  if (parseInt(mm) < 10) {
	    mm = "0" + mm;
	  }

	  if (ss < 10) {
	    ss = "0" + ss;
	  }

	  return hh + ":" + mm + ":" + ss;
	};
	function getComputedStyle$1(el) {
	  return el.currentStyle || window.getComputedStyle(el, null);
	}
	function setDurationDom(second) {
	  var time = Convert(parseInt(second));
	  this.domEl.durationDom.innerHTML = time;
	}
	function setCurrentDom(second) {
	  var time = Convert(parseInt(second));
	  this.domEl.currentDom.innerHTML = time;
	}
	var common = {
	  createChild: createChild,
	  createBtn: createBtn,
	  addClass: addClass,
	  removeClass: removeClass
	};

	function setProgressLine(video) {
	  video = video || this.videoEl;
	  var percent = parseInt(video.currentTime / video.duration * 10000) / 10000;
	  var progressWidth = getComputedStyle$1(this.domEl.progressBarContainerDom).width;
	  this.domEl.progressCurrentCircleDom.style.display = "block";
	  this.domEl.progressCurrentCircleDom.style.left = percent * parseFloat(progressWidth) + "px";
	  this.domEl.progressLineDom.style.width = percent * parseFloat(progressWidth) + "px";
	}

	function refreshCanvas$1(bool) {
	  var _self = this;

	  var playerDom = this.domEl.playerDom;
	  var video = this.videoEl;
	  var canvas = this.domEl.canvasDom;
	  var ctx = canvas.getContext('2d'); // 设置高度

	  var boxW = parseFloat(getComputedStyle(playerDom).width);
	  var boxH = parseFloat(getComputedStyle(playerDom).height);
	  canvas.width = boxW;
	  canvas.height = boxH; // 计算宽高

	  var scale = boxW / boxH;
	  var vScale = video.videoWidth / video.videoHeight;
	  var drawWidth = canvas.width;
	  var drawHeight = canvas.height;
	  var drawStartX = 0;
	  var drawStartY = 0;

	  if (scale > vScale) {
	    var w = boxH * video.videoWidth / video.videoHeight;
	    drawStartX = (boxW - w) / 2;
	    drawWidth = w;
	  } else {
	    var h = boxW * video.videoHeight / video.videoWidth;
	    drawStartY = (boxH - h) / 2;
	    drawHeight = h;
	  }

	  ctx.drawImage(video, drawStartX, drawStartY, drawWidth, drawHeight); // 更新当前时间

	  setCurrentDom.call(_self, video.currentTime); // 根据当前时间计算进度条位置

	  setProgressLine.call(_self); // 播放完毕则停止播放

	  if (video.ended && !bool) EndVideo.call(_self);
	} // 播放时的处理 获取视频内容进行播放

	function loadCanvas() {
	  this.Timer = window.setInterval(refreshCanvas$1.bind(this), 0);
	}

	function changeStatus(bool, isPaused) {
	  var controlPlayDom = this.domEl.controlPlayDom;
	  var startBarDom = this.domEl.startBarDom;

	  if (this.videoEl.paused && !bool || isPaused) {
	    // 显示开始标志
	    removeClass.call(controlPlayDom, "xr_icon_play");
	    addClass.call(controlPlayDom, "xr_icon_pause");
	    removeClass.call(startBarDom, "xr_icon_bofangliang");
	    addClass.call(startBarDom, "xr_icon_zanting1");
	    startBarDom.style.display = "none";
	  } else {
	    // 显示停止标志
	    removeClass.call(controlPlayDom, "xr_icon_pause");
	    addClass.call(controlPlayDom, "xr_icon_play");
	    removeClass.call(startBarDom, "xr_icon_zanting1");
	    addClass.call(startBarDom, "xr_icon_bofangliang");
	    startBarDom.style.display = "block";
	  }
	} // 视频播放

	var videoPlay = function videoPlay() {
	  // console.log("videoPlay");
	  var _self = this;

	  loadCanvas.call(this);
	  var promise = this.videoEl.play();
	  promise.then(function () {
	    // 隐藏封面图层
	    hidePoster.call(_self);

	    if (_self.options.autoplay) {
	      changeStatus.call(_self, false, true); // 切换按钮状态
	    }
	  }).catch(function (err) {
	    // 不支持自动播放
	    if (_self.options.autoplay) {
	      // 触发式自动播放
	      setAutoPlayWhenClick.call(_self);
	    }
	  });
	}; // 视频暂停

	var videoPause = function videoPause() {
	  // console.log("videoPause");
	  var _self = this;

	  this.videoEl.pause();
	  refreshCanvas$1.call(this, true);
	  setTimeout(function () {
	    clearInterval(_self.Timer);
	    _self.Timer = null;
	  }, 0);
	};

	function setAutoPlayWhenClick() {
	  var _self = this;

	  function setAutoPlay() {
	    // 设置自动播放为true
	    videoPlay.call(_self);
	    window.top.document.removeEventListener('click', setAutoPlay);
	    window.top.document.removeEventListener('touchend', setAutoPlay);
	  }

	  window.top.document.addEventListener('click', setAutoPlay);
	  window.top.document.addEventListener('touchend', setAutoPlay);
	}

	function changePlayer(event) {
	  event && event.preventDefault();
	  changeStatus.call(this, false); // 切换按钮状态

	  if (this.videoEl.paused) {
	    videoPlay.call(this);
	  } else {
	    videoPause.call(this);
	  }
	} // 结束视频

	var EndVideo = function EndVideo() {
	  videoPause.call(this);
	  setCurrentDom.call(this, 0);
	  setProgressLine.call(this);
	  changeStatus.call(this, true); // 显示开始
	  // 监听事件埋点

	  this.addListenerList.ended && this.addListenerList.ended();
	  clearInterval(this.Timer);
	  this.Timer = null;
	};

	function videoEvent(video) {
	  var _this = this;

	  var debug = this.options.debug;

	  video.onloadedmetadata = function () {
	    // 设置当前的播放时间点 单位秒
	    video.currentTime = _this.options.currentTime; // 设置进度条

	    setProgressLine.call(_this, video); // 设置总时长

	    setDurationDom.call(_this, video.duration);
	    changeStatus.call(_this, true);
	  };

	  video.onloadstart = function () {
	    debug && console.log("loadstart");
	  };

	  video.ondurationchange = function () {
	    debug && console.log("durationchange");
	  };

	  video.onloadeddata = function () {
	    debug && console.log("loadeddata");
	  };

	  video.onprogress = function () {
	    debug && console.log("progress");
	  };

	  video.oncanplay = function () {
	    debug && console.log("canplay");
	  };

	  video.oncanplaythrough = function () {
	    debug && console.log("canplaythrough");
	  };
	}
	function loadEvent(video) {
	  // var _self = this;
	  return function load(options) {
	    video.src = options.src;
	    this.options.autoplay = true;
	    changePlayer.call(this);
	    setPoster.call(this, options.poster);
	  }.bind(this);
	}

	function initVideo() {
	  var video = document.createElement("video");
	  video.src = this.options.src;
	  video.preload = 'metadata'; // 挂载video

	  this.videoEl = video;
	  videoEvent.call(this, video);
	  this.load = loadEvent.call(this, video);
	}

	function initDefaultCss() {
	  var _this = this;

	  defaultCss.forEach(function (item) {
	    var cssPath =  item.dev ;
	    cssPath = cssPath.replace("{baseHost}", _this.options.baseHost);
	    cssPath = cssPath.replace("{basePath}", _this.options.basePath);
	    cssPath && loadCss(cssPath);
	  });
	}

	function getWH(value) {
	  var strValue = value.toString();
	  var end = strValue.charAt(strValue.length - 1);
	  return isNaN(+end) ? value : value + "px";
	}

	function initPlayerDom() {
	  var playerDom = document.querySelector(this.options.el);
	  this.common.addClass.call(playerDom, "xr-player-dom");
	  playerDom.style.width = getWH(this.options.width);
	  playerDom.style.height = getWH(this.options.height);
	  var boxWidth = parseFloat(getComputedStyle$1(playerDom).width);
	  var boxHeight = parseFloat(getComputedStyle$1(playerDom).height);
	  this.videoEl.width = boxWidth;
	  this.videoEl.height = boxHeight;
	  this.domEl.playerDom = playerDom;
	  return playerDom;
	}

	function setVolume(value) {
	  this.videoEl.volume = value;
	  var voiceMarkDom = this.domEl.voiceMarkDom;
	  var voiceLineDom = this.domEl.voiceLineDom;
	  var voiceDragDom = this.domEl.voiceDragDom;

	  if (this.videoEl.volume > 0) {
	    removeClass.call(voiceMarkDom, "xr_icon_sound-off");
	    addClass.call(voiceMarkDom, "xr_icon_sound-on");
	  } else {
	    removeClass.call(voiceMarkDom, "xr_icon_sound-on");
	    addClass.call(voiceMarkDom, "xr_icon_sound-off");
	  }

	  var percent = parseInt(value * 100);
	  voiceLineDom.style.width = percent + "%";
	  voiceDragDom.style.left = percent + "%";
	}

	function handleKeyboard(event) {
	  if (event.target.nodeName == "BODY") {
	    this.isKeypress = false;
	  } else {
	    this.isKeypress = true;
	  }

	  if (event.keyCode == 32) {
	    changePlayer.call(this);
	  }
	}

	// 取消全屏
	function cancelFullScreen() {
	  if (document.exitFullscreen) {
	    document.exitFullscreen();
	  } else if (document.mozCancelFullScreen) {
	    document.mozCancelFullScreen();
	  } else if (document.msExitFullscreen) {
	    document.msExiFullscreen();
	  } else if (document.webkitCancelFullScreen) {
	    document.webkitCancelFullScreen();
	  } else if (document.webkitExitFullscreen) {
	    document.webkitExitFullscreen();
	  }
	} // element元素全屏

	function onFullScreen(element) {
	  if (element.requestFullscreen) {
	    element.requestFullscreen();
	  } else if (element.mozRequestFullScreen) {
	    element.mozRequestFullScreen();
	  } else if (element.msRequestFullscreen) {
	    element.msRequestFullscreen();
	  } else if (element.webkitRequestFullscreen) {
	    element.webkitRequestFullScreen();
	  }
	} // ie全屏

	var playEvent = function playEvent() {
	  var controlPlayDom = this.domEl.controlPlayDom;
	  var shadowDom = this.domEl.shadowDom;

	  var _self = this;

	  controlPlayDom.addEventListener("click", function (event) {
	    // 处理键盘事件冲突
	    if (_self.isKeypress) {
	      _self.isKeypress = false;
	      return;
	    }

	    changePlayer.call(_self, event);
	  }, true);
	  shadowDom.addEventListener("click", function (event) {
	    changePlayer.call(_self, event);
	  }, true);
	}; // 监听全屏变化

	var fullScreen = function fullScreen() {
	  var _self = this;

	  var video = this.videoEl;
	  var playerDom = this.domEl.playerDom;
	  var fullDom = this.domEl.fullDom;
	  playerDom.addEventListener('fullscreenchange', function () {
	    if (document.fullscreenElement) {
	      _self.fullscreen = true;
	      removeClass.call(fullDom, "xr_icon_expand-arrows");
	      addClass.call(fullDom, "xr_icon_compress-arrows-alt");
	    } else {
	      _self.fullscreen = false;
	      removeClass.call(fullDom, "xr_icon_compress-arrows-alt");
	      addClass.call(fullDom, "xr_icon_expand-arrows");
	    } // 修复全屏和取消全屏时候的画面变化


	    if (video.paused) {
	      refreshCanvas.call(_self, true);
	    }
	  }, false); // 全屏

	  fullDom.addEventListener("click", function (event) {
	    // 处理键盘事件冲突
	    if (_self.isKeypress) {
	      _self.isKeypress = false;
	      return;
	    }

	    if (_self.fullscreen) {
	      cancelFullScreen();
	    } else {
	      onFullScreen(playerDom);
	    }
	  });
	};
	var progressEvent = function progressEvent() {
	  var _self = this;

	  var video = this.videoEl;
	  var playerDom = this.domEl.playerDom;
	  var progress = this.domEl.progressBarContainerDom; // 进度条事件

	  progress.addEventListener("mousedown", function (event) {
	    var progressLeft = this.getBoundingClientRect().left;
	    var progressWidth = this.offsetWidth;
	    var html = document.getElementsByTagName("html")[0];

	    function docMove(event) {
	      var left = (event.pageX - progressLeft) / progressWidth;

	      if (left < 0) {
	        left = 0;
	      }

	      if (left > 1) {
	        left = 1;
	      }

	      video.currentTime = left * video.duration;
	      setProgressLine.call(_self);
	      html.style.cursor = "pointer";
	    }

	    function docUp(event) {
	      var left = (event.pageX - progressLeft) / progressWidth;

	      if (left < 0) {
	        left = 0;
	      }

	      if (left > 1) {
	        left = 1;
	      }

	      video.currentTime = left * video.duration;

	      if (video.paused) {
	        changePlayer.call(_self);
	      }

	      setProgressLine.call(_self);
	      html.style.cursor = "auto";
	      document.removeEventListener("mousemove", docMove);
	      document.removeEventListener("mouseup", docUp);
	      clearInterval(_self.Timer);
	      videoPlay.call(_self);
	    }

	    document.addEventListener("mousemove", docMove);
	    document.addEventListener("mouseup", docUp);
	  });
	};
	var voiceEvent = function voiceEvent() {
	  var _self = this;

	  var video = this.videoEl;
	  var voiceMuteDom = this.domEl.voiceMarkDom;
	  var voiceDom = this.domEl.voiceDom; // 音量静音/恢复

	  voiceMuteDom.addEventListener("click", function () {
	    if (video.volume > 0) {
	      _self.oldVolume = video.volume;
	      setVolume.call(_self, 0);
	    } else {
	      setVolume.call(_self, _self.oldVolume || 0.5);
	    }
	  }); // 音量

	  voiceDom.addEventListener("mousedown", function (event) {
	    var voiceLeft = this.getBoundingClientRect().left;
	    var voiceWidth = this.offsetWidth;
	    var html = document.getElementsByTagName("html")[0];

	    function docMove(event) {
	      var left = (event.pageX - voiceLeft) / voiceWidth;

	      if (left < 0) {
	        left = 0;
	      }

	      if (left > 1) {
	        left = 1;
	      }

	      setVolume.call(_self, left);
	      html.style.cursor = "pointer";
	    }

	    function docUp(event) {
	      var left = (event.pageX - voiceLeft) / voiceWidth;

	      if (left < 0) {
	        left = 0;
	      }

	      if (left > 1) {
	        left = 1;
	      }

	      setVolume.call(_self, left);
	      html.style.cursor = "auto";
	      document.removeEventListener("mousemove", docMove);
	      document.removeEventListener("mouseup", docUp);
	    }

	    document.addEventListener("mousemove", docMove);
	    document.addEventListener("mouseup", docUp);
	  });
	};
	var keyboardEvent = function keyboardEvent() {
	  var _self = this;

	  var playerDom = this.domEl.playerDom; // 是否是播放页

	  if (!_self.options.playerPage) {
	    // 是否播放的状态切换
	    document.addEventListener("click", function () {
	      _self.isPlayer = false;
	    });
	    playerDom.addEventListener("click", function () {
	      event.stopPropagation();
	      _self.isPlayer = true;
	    });

	    document.onkeypress = function (event) {
	      event.preventDefault();
	      event.stopPropagation();

	      if (_self.isPlayer) {
	        handleKeyboard.call(_self, event);
	      }
	    };
	  } else {
	    document.onkeypress = function (event) {
	      handleKeyboard.call(_self, event);
	    };
	  }
	};
	var initEvent = function initEvent() {
	  playEvent.call(this);
	  fullScreen.call(this);
	  progressEvent.call(this);
	  voiceEvent.call(this);
	  keyboardEvent.call(this);
	};
	var addListenerEvent = function addListenerEvent() {
	  this.addListenerList = {};
	  return function addListener(eventName, callback) {
	    this.addListenerList[eventName] = callback;
	  }.bind(this);
	};

	function initPlayerEvent() {
	  // 设置时间
	  setVolume.call(this, this.options.volume); // 挂载所有事件

	  initEvent.call(this);
	  this.addListener = addListenerEvent.call(this);
	}

	var initPlayer = function initPlayer() {
	  // console.log(this.options);
	  // 挂载css
	  initDefaultCss.call(this); // 挂载videoEl

	  initVideo.call(this); // 初始化播放器dom存放Object

	  this.domEl = {}; // 初始化播放器容器

	  var playerDom = initPlayerDom.call(this); // canvas

	  canvas.call(this, playerDom); // 封面

	  poster.call(this, playerDom); // 蒙层

	  shadow.call(this, playerDom); // 控制栏

	  control.call(this, playerDom); // 所有dom构造结束后进行

	  initPlayerEvent.call(this);

	  if (this.options.autoplay) {
	    changeStatus.call(this, false);
	    videoPlay.call(this);
	  }

	  return this;
	};

	//->https://xxx.com/ProjectName/statics/xjo/

	(function (defaultOptions) {
	  function find(str, cha, num) {
	    var x = str.indexOf(cha);

	    for (var i = 0; i < num - 1; i++) {
	      x = str.indexOf(cha, x + 1);
	    }

	    return x;
	  }

	  var tags = document.getElementsByTagName("script");

	  try {
	    var path = tags[tags.length - 1].getAttribute("src");
	    defaultOptions.basePath = path.substring(0, path.lastIndexOf("/") + 1);
	  } catch (_unused) {
	    for (var i = tags.length - 1; i >= 0; i--) {
	      var item = tags[i];

	      if (item.getAttribute("src") && item.getAttribute("src").indexOf("xrplayer") > -1) {
	        var _path = item.getAttribute("src");

	        defaultOptions.basePath = _path.substring(0, _path.lastIndexOf("/") + 1);
	      }
	    }
	  }

	  defaultOptions.baseHost = defaultOptions.basePath.substring(0, find(defaultOptions.basePath, "/", 3));
	})(defaultOptions);

	function xrPlayer(options) {
	  // 合并配置项
	  this.options = assignIn_1(defaultOptions, options); // 总变量

	  this.Timer = null; // 记录全屏

	  this.fullscreen = null; // 记录音量

	  this.oldVolume = 0; // 是否选中了播放器

	  this.isPlayer = false; // 是否键盘事件

	  this.isKeypress = false;
	  return initPlayer.call(this);
	} // 挂载公共方法


	xrPlayer.prototype.common = common;

	return xrPlayer;

})));
//# sourceMappingURL=xrPlayer.umd.js.map
