// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s === ' ') return true;

  let str = s.replace(/[\W_]/g, '').toLowerCase();

  let reversedString = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  return str === reversedString;
};

const s = 'A man, a plan, a canal: Panama';
const result = isPalindrome(s);
console.log(result);

// Time Complexity: O(n) + time taken by replace (not clear about inner working, will take this later).
// Space Complexity: O(n) as we have only two constants here.
