/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {};

  while (nums.length > 0) {
    const num = nums.pop();
    map[num] = map[num] + 1 || 1;
  }

  return Object.keys(map)
    .sort((a, b) => {
      if (map[b] > map[a]) {
        return 1;
      }
      return -1;
    })
    .slice(0, k);
};
