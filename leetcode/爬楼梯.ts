function climbStairs(n: number): number {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }

  let i = 1;
  let j = 2;
  for (let o = 3; o < n; o++) {
    let n = j;
    j = i + j;
    i = n;
  }

  return i + j;
}
