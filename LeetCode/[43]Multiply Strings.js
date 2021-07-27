// Input: num1 = "2", num2 = "3"
// Output: "6"

// Input: num1 = "123", num2 = "456"
// Output: "56088"

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let r = [0];

  if (num1 === "0" || num2 === "0") {
    return "0";
  }

  for (let i = 0; i < num1.length; i++) {
    let f = 0;
    let a = [];
    for (let n = num2.length - 1; n >= 0; n--) {
      let b = num2[n] * num1[num1.length - i - 1] + f;

      f = Math.floor(b / 10);
      a.push(b % 10);
    }

    if (f > 0) {
      a.push(f);
      f = 0;
    }

    for (let p = 0; p < i; p++) {
      a.unshift(0);
    }

    let l = Math.max(r.length, a.length);
    for (let m = 0; m < l; m++) {
      let g = (+r[m] || 0) + (+a[m] || 0) + f;
      r[m] = g % 10;
      f = g >= 10 ? 1 : 0;
    }

    if (f > 0) {
      r.push(f);
    }
  }

  return r.reverse().join("");
};
