const str = require('./lib/bundle');

const s = str.slugify('the  good   the bad  ');
console.log(s);

const x = str.slugify("one flew over the cucoo's nest");
console.log(x);
