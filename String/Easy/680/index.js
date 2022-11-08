// 680. Valid Palindrome II
// https://leetcode.com/problems/valid-palindrome-ii/

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (str, i, j) => {
  while (i < j) {
    if (str[i] === str[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};

const validPalindrome = (s) => {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] === s[end]) {
      start++;
      end--;
    } else {
      return isPalindrome(s, start + 1, end) || isPalindrome(s, start, end - 1);
    }
  }
  return true;
};

const s = 'aba';
const result = validPalindrome(s);
console.log(result);

// Time Complexity: O(n)
// Space Complexity: O(n)