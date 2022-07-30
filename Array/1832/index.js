// 1832. Check if the Sentence Is Pangram
// https://leetcode.com/problems/check-if-the-sentence-is-pangram/

/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
    let alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let pangram = []
    for (const letter of sentence) {
    if (!pangram.includes(letter) && alphabets.includes(letter)) {
            pangram.push(letter)
        }
    }
    if (pangram.length === 26) {
        return true
    }
    return false;
};

const sentence = "thequickbrownfoxjumpsoverthelazydog";
const isPangram = checkIfPangram(sentence);
console.log(isPangram);