require('mocha');
const str = require('./lib/bundle');
const { assert, expect } = require('chai');

function assertString() {
  it('should throw if not a string', () => {
    expect(() => {
      str.reverse(1);
    }).to.throw('input is not a string');

    expect(() => {
      str.reverse({});
    }).to.throw('input is not a string');

    expect(() => {
      str.reverse(null);
    }).to.throw('input is not a string');
  });
}

describe('reverse', () => {
  assertString();

  it('should reverse a string', () => {
    let cases = [
      { in: 'Theo', want: 'oehT' },
      { in: 'Jo the one', want: 'eno eht oJ' },
      { in: "Load's of m's", want: "s'm fo s'daoL" },
    ];

    cases.forEach(c => {
      assert.equal(str.reverse(c.in), c.want);
    });
  });
});

describe('capitalize', () => {
  assertString();

  it('should capitalize a string', () => {
    let cases = [
      { in: 'theo', want: 'Theo' },
      { in: 'jonny rotten', want: 'Jonny rotten' },
      { in: ',jl', want: ',jl' },
      { in: "'jl", want: "'jl" },
      { in: '@jl', want: '@jl' },
      { in: '!jl', want: '!jl' },
      { in: '#jl', want: '#jl' },
    ];

    cases.forEach(c => {
      assert.equal(str.capitalize(c.in), c.want);
    });
  });
});

describe('uncapitalize', () => {
  assertString();
  it('should uncapitalize a string', () => {
    let cases = [
      { in: 'This is a sentence', want: 'this is a sentence' },
      { in: 'Test One Two Three', want: 'test One Two Three' },
    ];

    cases.forEach(c => {
      assert.equal(str.uncapitalize(c.in), c.want);
    });
  });
});

describe('titleize', () => {
  assertString();
  it('should titalize a string', () => {
    let cases = [
      { in: '!jl', want: '!jl' },
      { in: '@jl', want: '@jl' },
      { in: 'The', want: 'The' },
      { in: 'The the', want: 'The the' },
      { in: 'The the the a on an', want: 'The the the a on an' },
      { in: 'On the the a on an', want: 'On the the a on an' },
      {
        in: 'the lion the witch and the wardrobe',
        want: 'The Lion the Witch and the Wardrobe',
      },
      {
        in: 'great expectations',
        want: 'Great Expectations',
      },
      {
        in: 'the good the bad and the ugly',
        want: 'The Good the Bad and the Ugly',
      },
    ];

    cases.forEach(c => {
      assert.equal(str.titleize(c.in), c.want);
    });
  });
});

describe('slugify', () => {
  assertString();
  it('Should slugify a string', () => {
    let cases = [
      {
        in: 'the good the bad and the ugly',
        want: 'the-good-the-bad-and-the-ugly',
      },
      {
        in: 'the good the bad and the  ugly',
        want: 'the-good-the-bad-and-the-ugly',
      },
      {
        in: 'Lion Witch',
        want: 'lion-witch',
      },
      {
        in: "One Flew Over the Cuckoo's nest",
        want: "one-flew-over-the-cuckoo's-nest",
      },
    ];

    cases.forEach(c => {
      assert.equal(str.slugify(c.in), c.want);
    });
  });
});

describe('helpers', () => {
  it('should mutate the first letter correctly', () => {});
});
