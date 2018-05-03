import { assertString } from './helpers';

/**
 * Turns a given string into a slug.
 *
 * @param {String} s
 * @param {String} delim
 * @returns {String}
 */

export default function(s, delim) {
  assertString(s);

  // To lower
  s = s.toLowerCase();

  // Create array
  let arr = s.split(' ');

  // Strip bad tings
  let newArr = [];

  arr.forEach(e => {
    if (e !== "'" && e !== ' ' && e) {
      newArr.push(e);
    }
  });

  let newString;

  if (delim) {
    newString = newArr.join(delim);
  } else {
    newString = newArr.join('-');
  }

  // replace bad chars
  let str = newString.replace(/'/g, '');

  // Encode to uri
  return encodeURIComponent(str);
}
