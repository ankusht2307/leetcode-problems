// 1854. Maximum Population Year
// https://leetcode.com/problems/maximum-population-year/

/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
  const temp = Array(101).fill(0);
  for (let i = 0; i < logs.length; i++) {
    for (let j = logs[i][0]; j < logs[i][1]; j++) {
      temp[j - 1950]++;
    }
  }

  let maxVal = 0;
  let year = 1950;
  for (let i = 0; i < 101; i++) {
    if (temp[i] > maxVal) {
      maxVal = temp[i];
      year = i + 1950;
    }
  }
  return year;
};

const logs = [[1993,1999],[2000,2010]];
const maxPopulation = maximumPopulation(logs);
console.log(maxPopulation); 