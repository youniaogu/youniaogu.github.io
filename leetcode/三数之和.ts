function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    let n = i + 1;
    let p = nums.length - 1;
    while (n < p) {
      if (n > i + 1 && nums[n] === nums[n - 1]) {
        n++;
        continue;
      }
      if (p < nums.length - 1 && nums[p] === nums[p + 1]) {
        p--;
        continue;
      }

      if (nums[i] + nums[n] + nums[p] === 0) {
        result.push([nums[i], nums[n], nums[p]]);
        n++;
        p--;
        continue;
      }
      if (nums[i] + nums[n] + nums[p] > 0) {
        p--;
        continue;
      } else {
        n++;
        continue;
      }
    }
  }

  return result;
}
