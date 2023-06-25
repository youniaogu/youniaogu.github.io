/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let max = nums[0];
  let index = max;
  let count = 1;

  if (nums.length === 1) {
    return 0;
  }

  for (let i = 1; i <= max && max < nums.length - 1; i++) {
    max = Math.max(max, i + nums[i]);

    if (i >= index) {
      count++;
      index = max;
    } else if (max >= nums.length - 1) {
      count++;
    }
  }

  return count;
};
