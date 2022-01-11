/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let f = 1;
  let i = digits.length - 1;

  while (f === 1) {
    if (i < 0) {
      digits.unshift(f);
      f = 0;
    } else {
      f += digits[i];
      digits[i] = f % 10;
      f = Math.floor(f / 10);
      i--;
    }
  }

  return digits;
};
