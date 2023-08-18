function lengthOfLongestSubstring(s: string): number {
  if (s === "") {
    return 0;
  }

  let max = 1;
  let left = 0;
  let map = {};
  for (let right = 0; right < s.length; right++) {
    if (map[s[right]] !== undefined) {
      left = map[s[right]] + 1;
    }
    map[s[right]] = right;
    max = Math.max(max, right - left + 1);
  }

  return max;
}
