// 1859. Sorting the Sentence
// https://leetcode.com/problems/sorting-the-sentence/

/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
    let sentence = s.split(" ");
    let strArr = Array(sentence.length);
    
    for (let i = 0; i < sentence.length; i++) {
        const word = sentence[i];
        strArr[word.charAt(word.length - 1) - 1] = word.slice(0, -1);
    }
    
    return strArr.join(' ');
};

const s = "is2 sentence4 This1 a3";
const result = sortSentence(s);
console.log(result);

// this algo have time
// o(n) time complexity
// as we have defined string length.

// Constraints:
// 2 <= s.length <= 200
// s consists of lowercase and uppercase English letters, spaces, and digits from 1 to 9.
// The number of words in s is between 1 and 9.
// The words in s are separated by a single space.
// s contains no leading or trailing spaces.