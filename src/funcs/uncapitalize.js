import { assertString, mutateFirstLetter } from './helpers';

/**
 * Uncapitalizes a string
 *
 * @param {String} s
 * @param {Boolean} knownString Pass in true if typeof input already known
 */

export default function(s, knownString) {
  if (!knownString) {
    assertString(s);
  }
  return mutateFirstLetter(s, 'toLowerCase');
}
