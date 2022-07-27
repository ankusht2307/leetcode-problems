// 1431. Kids With the Greatest Number of Candies
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

/**
 * Brute force solution: O(n2)
 */
var kidsWithCandiesB = function (candies, extraCandies) {
  let kid = 0;
  let result = [];
  for (let i = 0; i < candies.length; i++) {
    for (let j = 0; j < candies.length; j++) {
      if (candies[kid] + extraCandies >= candies[j]) {
        result[kid] = true;
      } else {
        result[kid] = false;
        break;
      }
    }
    kid++;
  }
  return result;
};

/**
 * Optimized solution: O(n)
 */
var kidsWithCandiesO = function (candies, extraCandies) {
  let max = candies[0];
  let result = [];
  for (let i = 0; i < candies.length; i++) {
    if (max <= candies[i]) max = candies[i];
  }

  for (let j = 0; j < candies.length; j++) {
    result.push(candies[j] >= max - extraCandies);
  }
  return result;
};

const candies = [2, 3, 5, 1, 3],
  extraCandies = 3;

const result = kidsWithCandiesB(candies, extraCandies);
console.log(result);
