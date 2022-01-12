/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length < 4) {
    return nums.reduce((a, b) => {
      return Math.max(a, b);
    });
  }

  let result = 0;
  [nums.slice(1), nums.slice(0, nums.length - 1)].forEach((line) => {
    let dp = [line[0], Math.max(line[0], line[1])];

    for (let i = 2; i < line.length; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + line[i]);
    }

    result = Math.max(result, dp[line.length - 1]);
  });

  return result;
};

// max(n) = max(dp(nums[1, n - 1]), dp(nums[0, n - 2]))
