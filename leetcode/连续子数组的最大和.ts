function maxSubArray(nums: number[]): number {
  let sum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    sum = Math.max(sum, nums[i]);
    for (let l = i + 1; l < nums.length; l++) {
      n += nums[l];
      sum = Math.max(sum, n);
    }
  }

  return sum;
}
