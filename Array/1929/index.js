// 1929. Concatenation of Array
// https://leetcode.com/problems/concatenation-of-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let tempArr = [];
  let inc = 0;
  let arrSize = nums.length * 2;
  for (let i = 0; i < arrSize; i++) {
    if (inc === nums.length) {
      inc = 0;
    }

    tempArr.push(nums[inc]);
    inc++;
  }
  return tempArr;
};

let arr = [1, 2, 3, 4, 5];
const ans = getConcatenation(arr);
console.log(ans);
