// 1662. Check If Two String Arrays are Equivalent
// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
 var arrayStringsAreEqual = function(word1, word2) {
    return buildString(word1) === buildString(word2);
};

function buildString(word) {
    let ans = "";
    for(let i = 0; i < word.length; i++ ) {
        ans += word[i];
    }
    return ans;
}

const word1 = ["ab", "c"], word2 = ["a", "bc"];
const result = arrayStringsAreEqual(word1, word2);
console.log(result);

// Time complexity is O(n).

