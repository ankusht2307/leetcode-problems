// 1704. Determine if String Halves Are Alike
// https://leetcode.com/problems/determine-if-string-halves-are-alike/

/**
 * @param {string} s
 * @return {boolean}
 */
 var halvesAreAlike = function(s) {
    let str = s.toLowerCase();
    let vowels = 'aeiou';
    let middle = str.length / 2;
    let firstHalf = str.slice(0, middle);
    let secondHalf = str.slice(middle);
    
    let firstCount = 0;
    for (let i = 0 ; i < firstHalf.length; i++) {
        if (vowels.includes(firstHalf[i])) {
            firstCount++
        }
    }
    
    let secondCount = 0;
    for (let i = 0 ; i < secondHalf.length; i++) {
        if (vowels.includes(secondHalf[i])) {
            secondCount++
        }
    }
    return firstCount === secondCount;
};

const s = "book";
const result = halvesAreAlike(s);
console.log(result);


// time complexity:  O(n)