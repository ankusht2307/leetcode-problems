// 1470. Shuffle the Array
// https://leetcode.com/problems/shuffle-the-array/

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const arr = [];
  let start = 0;
  let mid = n;
  for (let i = 0; i < nums.length; i++) {
    if (start < n) {
      arr.push(nums[start]);
      start++;
    }
    if (mid < nums.length) {
      arr.push(nums[mid]);
      mid++;
    }
  }
  return arr;
};

const nums = [2,5,1,3,4,7], n = 3;
const shuffledArray = shuffle(nums, n);
console.log(shuffledArray);