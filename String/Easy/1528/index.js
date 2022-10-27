// 1528. Shuffle String
// https://leetcode.com/problems/shuffle-string/

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    let temp = [];
    for(let i = 0; i < indices.length; i++) {
        temp[indices[i]] = s[i];
    }
    return temp.join('');
};

const s = "codeleet", indices = [4,5,6,7,0,2,1,3];
const shuffledString = restoreString(s, indices);
console.log(shuffledString);