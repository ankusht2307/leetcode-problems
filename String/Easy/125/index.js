// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s === ' ') return true;

  let str = s.replace(/[\W_]/g, '').toLowerCase();
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] === str[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
};

const s = 'A man, a plan, a canal: Panama';
const result = isPalindrome(s);
console.log(result);

// Time Complexity: O(n) + time taken by replace (not clear about inner working, will take this later).
// Space Complexity: O(n) as we have only two constants here.
