/**
 * Problem: Given a number 'n', find the first 'n' elements
 * of the Fibonacci sequence.
 *
 * In Mathematics, the fibonacci sequence is a sequence in which
 * each number is the sum of the two preceding ones.
 *
 * @param {*} n
 * @returns []
 */

const fibonacci = (n) => {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(9999999));

// Big-O: O(n) - Linear based on the input.
// Space Complexity: O(n) - Also linear because size of array grows with input.
