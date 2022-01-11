/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let f = [0, 1];

  for (let i = 2; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }

  return f[n];
};
