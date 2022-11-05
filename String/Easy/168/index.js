// 168. Excel Sheet Column Title
// https://leetcode.com/problems/excel-sheet-column-title/

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let str = '';
  while (columnNumber > 0) {
    columnNumber--;
    str += String.fromCharCode((columnNumber % 26) + 65);
    columnNumber = Math.floor(columnNumber / 26);
  }

  return str.split('').reverse().join('');
};

const columnNumber = 28;
const result = convertToTitle(columnNumber);
console.log(result);

// Time complexity: O(n)
// Space complexity: O(n)
