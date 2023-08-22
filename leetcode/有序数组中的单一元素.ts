function singleNonDuplicate(nums: number[]): number {
  let o = nums[0];
  let m = undefined;
  let n = undefined;
  for (let i = 0; i < nums.length; i++) {
    o = nums[i];
    if (i > 0) {
      m = nums[i - 1];
    }
    if (i > 1) {
      n = nums[i - 2];
    }
    if (o > m && n !== m) {
      return m;
    }
    if (o > m && i === nums.length - 1) {
      return nums[i];
    }
  }

  return nums[0];
}
