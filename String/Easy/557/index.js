// 557. Reverse Words in a String III
// https://leetcode.com/problems/reverse-words-in-a-string-iii/

/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let words = s.split(' ');
    let reversedArray = [];
    let reversedString = '';
    
    for (let i = 0; i < words.length; i++) {
        for (let j  = words[i].length - 1; j >= 0; j--) {
            reversedString += words[i][j]          
        }
        reversedArray.push(reversedString);
        reversedString = ''
    }
    
    return reversedArray.join(' ');
};

const s = "Let's take LeetCode contest";
const result = reverseWords(s);
console.log(result)

// Time complexity: O(n^2)
// Space complexity: O(n)