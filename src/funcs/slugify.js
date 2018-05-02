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
