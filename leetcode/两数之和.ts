// function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length; i++) {
//     for (let o = i + 1; o < nums.length; o++) {
//       if (nums[i] + nums[o] === target) {
//         return [i, o];
//       }
//     }
//   }

//   return [];
// }

function twoSum(nums: number[], target: number): number[] {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined) {
      return [i, map[target - nums[i]]];
    }

    map[nums[i]] = i;
  }

  return [];
}
