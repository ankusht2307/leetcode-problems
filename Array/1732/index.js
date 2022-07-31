// 1732. Find the Highest Altitude
// https://leetcode.com/problems/find-the-highest-altitude/

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let curAlt = 0;
  let maxAlt = 0;
  for (let i = 0; i < gain.length; i++) {
    if (curAlt + gain[i] > maxAlt) {
      maxAlt = curAlt + gain[i];
    }
    curAlt = curAlt + gain[i];
  }
  return maxAlt;
};

const gain = [-5, 1, 5, 0, -7];
const maxAlt = largestAltitude(gain);
console.log(maxAlt);
