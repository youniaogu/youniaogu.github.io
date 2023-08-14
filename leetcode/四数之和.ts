function fourSum(nums: number[], target: number): number[][] {
  const result: number[][] = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
    if (nums[i] > target / 4) {
      break;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let o = i + 1; o < nums.length - 2; o++) {
      if (nums[i] + nums[o] > (target * 2) / 4) {
        break;
      }
      if (o > i + 1 && nums[o] === nums[o - 1]) {
        continue;
      }

      let n = o + 1;
      let m = nums.length - 1;
      while (n < m) {
        if (n > o + 1 && nums[n] === nums[n - 1]) {
          n++;
          continue;
        }
        if (m < nums.length - 1 && nums[m] === nums[m + 1]) {
          m--;
          continue;
        }

        if (nums[i] + nums[o] + nums[n] + nums[m] === target) {
          result.push([nums[i], nums[o], nums[n], nums[m]]);
          n++;
          m--;
          continue;
        }
        if (nums[i] + nums[o] + nums[n] + nums[m] > target) {
          m--;
          continue;
        } else {
          n++;
          continue;
        }
      }
    }
  }

  return result;
}
