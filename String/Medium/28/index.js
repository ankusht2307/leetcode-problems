// 28. Find the Index of the First Occurrence in a String
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // one liner
  // return haystack.indexOf(needle);

  if (haystack.length >= needle.length) {
    let j;
    for (let i = 0; i < haystack.length; i++) {
      for (j = 0; j < needle.length; j++) {
        if (needle[j] !== haystack[i + j]) break;
      }

      if (j === needle.length) return i;
    }
  }
  return -1;
};

const haystack = 'sadbutsad',
  needle = 'sad';
// const haystack = "sadbutsad", needle = "sad"

const result = strStr(haystack, needle);
console.log(result);
