// Input: a = "11", b = "1"
// Output: "100"

// Input: a = "1010", b = "1011"
// Output: "10101"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let c = a.split("").reverse();
  let d = b.split("").reverse();
  let e = Math.max(c.length, d.length);
  let f = 0;
  let r = "";

  for (let i = 0; i < e; i++) {
    const g = (+c[i] || 0) + (+d[i] || 0) + f;

    if (g >= 2) {
      f = 1;
      r = Math.abs(g - 2) + r;
    } else {
      f = 0;
      r = g + r;
    }
  }

  return f === 1 ? f + r : r;
};

console.log(addBinary("0", "0"));
console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
