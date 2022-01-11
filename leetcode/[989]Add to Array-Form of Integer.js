/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let a = String(k)
    .split("")
    .map((i) => +i)
    .reverse();
  let b = num.reverse();
  let c = Math.max(num.length, a.length);
  let f = 0;

  for (let i = 0; i < c; i++) {
    let d = (a[i] || 0) + (b[i] || 0) + f;

    if (d >= 10) {
      f = 1;
      a[i] = Math.abs(10 - d);
    } else {
      f = 0;
      a[i] = d;
    }
  }

  if (f === 1) {
    a.push(1);
  }

  return a.reverse();
};

//更好的方法: https://leetcode.com/problems/add-to-array-form-of-integer/discuss/258286/JavaScript-Clean-and-fast-solution-with-explanation.(No-reverse)
