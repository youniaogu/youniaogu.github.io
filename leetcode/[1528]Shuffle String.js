/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  const r = [];

  while (indices.length > 0) {
    const i = indices.length;
    const indice = indices.pop();

    r[indice] = s.charAt(i - 1);
  }

  return r.join("");
};
