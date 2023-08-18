function findContinuousSequence(target: number): number[][] {
  let result: number[][] = [];

  for (let i = 1; i < Math.ceil(target / 2); i++) {
    let n = i;
    let m: number[] = [i];
    for (let l = i + 1; i < target; l++) {
      n += l;
      m.push(l);
      if (n > target) {
        break;
      }
      if (n === target) {
        result.push(m);
        break;
      }
    }
  }

  return result;
}
