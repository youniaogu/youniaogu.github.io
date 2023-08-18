// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), 其中 N > 1.

function fib(n: number): number {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  let i = 0;
  let l = 1;
  for (let m = 2; m < n; m++) {
    let o = l;
    l = (i + l) % 1000000007;
    i = o;
  }

  return (i + l) % 1000000007;
}
