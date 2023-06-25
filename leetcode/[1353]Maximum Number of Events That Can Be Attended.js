/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function (events) {
  const map = {};
  let number = 0;

  events.sort((a, b) => {
    if (b[1] === a[1]) {
      return a[0] - b[0];
    }

    return a[1] - b[1];
  });

  while (events.length > 0) {
    const [start, end] = events.shift();
    for (let i = start; i <= end; i++) {
      if (!map[i]) {
        map[i] = true;
        number++;
        break;
      }
    }
  }

  return number;
};
