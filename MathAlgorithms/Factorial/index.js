/**
 * Problem: Given an integer, find the factorial of that integer.
 *
 * In Mathematics, the factorial of a non-negative integer 'n',
 * denoted n!, is the product of all the positive integers less
 * then or equal to 'n'.
 */

const factorial = (n) => {
  let fact = 1;
  for (let i = 0; i < n; i++) {
    fact = fact * (n - i);
  }
  return fact;
};

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(10));
console.log(factorial(20));

// Big-O: O(n)
// Space Complexity: 0(n)
