// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let dp = [nums[0]];

  if (nums.length > 1) {
    dp[1] = Math.max(nums[0], nums[1]);
  }

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[nums.length - 1];
};

rob([0]);
rob([2, 7, 9, 3, 1]);

// dp[n] = max(dp(n - 1), dp(n - 2) + f(n));
