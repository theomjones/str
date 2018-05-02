const str = require('./lib/bundle');

const s = str.slugify('the  good the bad');
console.log(s);

const x = str.slugify('the  good the  !  £    bad');
console.log(x);

const y = str.slugify("toad's's");
console.log(y);
