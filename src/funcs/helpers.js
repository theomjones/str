export const assertString = function(s) {
  if (typeof s != 'string') {
    throw new Error('input is not a string');
  }
};

export const mutateFirstLetter = function(s, func) {
  let arr = s.split('');
  let fl = arr.shift();

  arr.unshift(fl[func]());
  return arr.join('');
};
