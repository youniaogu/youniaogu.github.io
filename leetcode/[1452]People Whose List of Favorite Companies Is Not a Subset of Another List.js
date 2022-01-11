/**
 * @param {string[][]} favoriteCompanies
 * @return {number[]}
 */
var peopleIndexes = function (f) {
  let r = [];

  for (let i = 0; i < f.length; i++) {
    let x = false;
    for (let n = 0; n < f.length; n++) {
      if (i === n) {
        continue;
      }

      let set = new Set(f[n]);
      if (f[i].every((val) => set.has(val))) {
        x = true;
        break;
      }
    }

    if (!x) {
      r.push(i);
    }
  }

  return r;
};
