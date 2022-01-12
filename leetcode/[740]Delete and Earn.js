/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const ary = [];

  nums.forEach((num) => {
    ary[num - 1] = (ary[num - 1] || 0) + num;
  });

  let dp = [ary[0] || 0, Math.max(ary[0] || 0, ary[1] || 0)];
  for (let i = 2; i < ary.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + (ary[i] || 0));
  }

  return dp[ary.length - 1];
};

// dp(n) = max(dp(n - 1), dp(n - 2) + f(n))
