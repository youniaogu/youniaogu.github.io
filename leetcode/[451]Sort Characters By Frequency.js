/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let map = {},
    str = "";

  for (const str of s) {
    map[str] = map[str] + 1 || 1;
  }

  const keys = Object.keys(map).sort((a, b) => {
    if (map[a] < map[b]) {
      return 1;
    }
    return -1;
  });

  while (keys.length > 0) {
    let key = keys.shift();
    let i = 0;
    while (i < map[key]) {
      str += key;
      i++;
    }
  }

  return str;
};
