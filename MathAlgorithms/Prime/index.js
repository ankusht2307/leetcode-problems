/**
 * Problem: Given a natural number 'n', determine if the
 * number is prime or not.
 * 
 * A prime number is a natural number greater than 1 that
 * is not a product of two similar natural numbers.
 * 
 * @param {*} n 
 * @returns boolean
 */

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

console.log(isPrime(2))
console.log(isPrime(5))
console.log(isPrime(11))
console.log(isPrime(55))
console.log(isPrime(6))
console.log(isPrime(50))

// Big-O: O(n) - Linear based on the input.
// Space Complexity: none as we do not have any variable defined.