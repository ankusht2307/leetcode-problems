// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
const findEvenDigits = (array) => {
  // check if arrai is empty
  if (array.length === 0) return null;

  let count = 0;
  for (const num of array) {
    if (num.toString().length % 2 === 0) count++;
  }

  return count;
};

const array = [1, 13, 87, 8363, 843, 92822, 947478, 84, 893, 0, 73];
const totalEvenDigits = findEvenDigits(array);
console.log(totalEvenDigits);
