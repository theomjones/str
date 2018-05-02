(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.str = factory());
}(this, (function () { 'use strict';

  const assertString = function(s) {
    if (typeof s != 'string') {
      throw new Error('input is not a string');
    }
  };

  const mutateFirstLetter = function(s, func) {
    let arr = s.split('');
    let fl = arr.shift();

    arr.unshift(fl[func]());
    return arr.join('');
  };

  /**
   * Turns a given string into a slug.
   *
   * @param {String} s
   * @param {String} delim
   * @returns {String}
   */

  function slugify(s, delim) {
    assertString(s);

    // To lower
    s = s.toLowerCase();

    // Create array
    let arr = s.split(' ');

    // Remove spaces
    arr = arr.filter(el => {
      if (el != ' ') return el;
    });

    let newString;

    if (delim) {
      newString = arr.join(delim);
    } else {
      newString = arr.join('-');
    }

    // Encode to uri
    return encodeURIComponent(newString);
  }

  function reverse(s) {
    assertString(s);
    return s
      .split('')
      .reverse()
      .join('');
  }

  /**
   * Capitalizes a string
   *
   * @param {String} s
   * @param {Boolean} knownString Pass in true if typeof input already known
   *
   */

  function capitalize(s, knownString) {
    if (!knownString) {
      assertString(s);
    }
    return mutateFirstLetter(s, 'toUpperCase');
  }

  function titleize(s) {
    assertString(s);

    let words = s.split(' ');
    let str = [];
    words.forEach((w, i) => {
      if (
        (w != 'a' && w != 'the' && w != 'and' && w != 'an' && w != 'on') ||
        i === 0
      ) {
        str.push(capitalize(w, true));
      } else {
        str.push(w);
      }
    });
    return str.join(' ');
  }

  /**
   * Uncapitalizes a string
   *
   * @param {String} s
   * @param {Boolean} knownString Pass in true if typeof input already known
   */

  function uncapitalize(s, knownString) {
    if (!knownString) {
      assertString(s);
    }
    return mutateFirstLetter(s, 'toLowerCase');
  }

  var index = {
    reverse,
    capitalize,
    uncapitalize,
    assertString,
    slugify,
    titleize,
  };

  return index;

})));
//# sourceMappingURL=bundle.js.map
