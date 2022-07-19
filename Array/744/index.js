// 744. Find Smallest Letter Greater Than Target
// https://leetcode.com/problems/find-smallest-letter-greater-than-target/

const findSmallestLetterGreaterThanTarget = (letters, target) => {
  // check if array is empty
  if (letters.length === 0) return null;

  let start = 0;
  let end = letters.length - 1;

  while (start <= end) {
    // find middle index
    let mid = Math.floor(start + (end - start) / 2);

    // if we first check target > letters[min]
    // then it won't work because when we are
    // finding largest we should increase
    // start.
    if (target < letters[mid]) {
        end = mid - 1;
    } else {
        start = mid + 1;
    }
  }

  return letters[start % letters.length];
};

const letters = ['c', 'f', 'j'];
const target = 'c';

const letter = findSmallestLetterGreaterThanTarget(letters, target);
console.log(letter);
