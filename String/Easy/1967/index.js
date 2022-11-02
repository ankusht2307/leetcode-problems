// 1967. Number of Strings That Appear as Substrings in Word
// https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/

/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
 var numOfStrings = function(patterns, word) {
    let count  = 0;
    for (let i = 0; i < patterns.length; i++) {
        if (word.indexOf(patterns[i]) > -1) count++;
    }
    return count;
};

const patterns = ["a","abc","bc","d"], word = "abc";

const result = numOfStrings(patterns, word);
console.log(result);

// Time Complexcity: O(n);