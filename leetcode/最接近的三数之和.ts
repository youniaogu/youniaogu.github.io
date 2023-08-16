function threeSumClosest(nums: number[], target: number): number {
  let nub = Infinity;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (
      nums[i] * 3 >= target &&
      Math.abs(nums[i] * 3 - target) > Math.abs(nub - target)
    ) {
      break;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let n = i + 1;
    let m = nums.length - 1;
    while (n < m) {
      if (n > i + 1 && nums[n] === nums[n - 1]) {
        n++;
        continue;
      }
      if (m < nums.length - 1 && nums[m] === nums[m + 1]) {
        m--;
        continue;
      }

      const l = nums[i] + nums[n] + nums[m];
      if (Math.abs(l - target) < Math.abs(nub - target)) {
        nub = l;
      }
      if (l > target) {
        m--;
      } else {
        n++;
      }
    }
  }

  return nub;
}

console.log(threeSumClosest([1, 1, 1, 5, 5, 5, 5, 5, 5], 14));
