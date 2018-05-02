import { assertString } from './helpers';

export default function(s) {
  assertString(s);
  return s
    .split('')
    .reverse()
    .join('');
}
