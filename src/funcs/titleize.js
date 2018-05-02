import { assertString } from './helpers';
import capitalize from './capitalize';

export default function(s) {
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
