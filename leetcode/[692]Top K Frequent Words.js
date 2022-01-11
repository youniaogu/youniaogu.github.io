/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const map = {};
  const ary = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (!map[word]) {
      map[word] = 1;
    } else {
      map[word]++;
    }
  }

  for (let n = 0; n < k; n++) {
    let max = 0,
      prev = "";
    for (const current in map) {
      if (max < map[current] || (max === map[current] && current < prev)) {
        ary[n] = current;
        max = map[current];
        prev = current;
      }
    }
    delete map[prev];
  }

  return ary;
};
