/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = -Infinity;
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    total = total + nums[i];

    max = Math.max(total, max);

    if (total < 0) {
      total = 0;
    }
  }

  return max;
};
