function threeSum(nums: number[]): number[][] {
  let result: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    for (let o = i + 1; i < nums.length; o++) {
      for (let p = o + 1; i < nums.length; p++) {
        if (nums[i] + nums[o] + nums[p] === 0) {
          result.push([nums[i], nums[o], nums[p]]);
        }
      }
    }
  }

  return result;
}
