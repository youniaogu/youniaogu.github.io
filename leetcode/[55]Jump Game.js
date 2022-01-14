/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let max = nums[0];

  for (let i = 1; i <= max && max < nums.length; i++) {
    max = Math.max(max, i + nums[i]);
  }

  return max >= nums.length - 1;
};

canJump([2, 0, 0]);
