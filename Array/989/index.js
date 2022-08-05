// 989. Add to Array-Form of Integer
// https://leetcode.com/problems/add-to-array-form-of-integer/

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */

var addToArrayForm = function (num, k) {
  let i = num.length - 1;
  let temp = [];
  let carry = 0;

  while (i >= 0 || k > 0) {
    if (i >= 0) {
      temp.push((num[i] + k) % 10);
      carry = (num[i] + k) / 10;
      k = Math.floor(carry);
      i--;
    } else {
      temp.push(k % 10);
      k = Math.floor(k / 10);
    }
  }

  return temp.reverse();
};

const num = [1, 2, 0, 0],
  k = 34;
const resultArray = addToArrayForm(num, k);
console.log(resultArray);
