// 1773. Count Items Matching a Rule
// https://leetcode.com/problems/count-items-matching-a-rule/

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  for (let i = 0; i < items.length; i++) {
    if (ruleKey === 'type' && items[i][0] === ruleValue) {
      count += 1;
    } else if (ruleKey === 'color' && items[i][1] === ruleValue) {
      count += 1;
    } else if (ruleKey === 'name' && items[i][2] === ruleValue) {
      count += 1;
    }
  }
  return count;
};

const items = [
    ['phone', 'blue', 'pixel'],
    ['computer', 'silver', 'lenovo'],
    ['phone', 'gold', 'iphone'],
  ],
  ruleKey = 'color',
  ruleValue = 'silver';

  const result = countMatches(items, ruleKey, ruleValue);
  console.log(result);

// this also has o(n) time complexity
// because the array size is constant.