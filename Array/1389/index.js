// 1389. Create Target Array in the Given Order
// https://leetcode.com/problems/create-target-array-in-the-given-order/

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  let target = [];
  for (let i = 0; i < nums.length; i++) {
    target.splice(index[i], 0, nums[i]);
  }
  return target;
};

const nums = [0, 1, 2, 3, 4],
  index = [0, 1, 2, 2, 1];
const result = createTargetArray(nums, index);
console.log(result);
