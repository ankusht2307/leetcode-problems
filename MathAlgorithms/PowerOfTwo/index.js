/**
 * Problem: Given a positive integer 'n', determine if the number is a power of 2 or not.
 * 
 * An integer is a power of two if there exits an integer 'x' such that 'n' === 2^x.
 * 
 * @param {*} n 
 * @returns Boolean
 */

const isPowerOfTwo = (n) => {
  if (n < 1) return true;

  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }
  return true;
};

console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(0))
console.log(isPowerOfTwo(3))
console.log(isPowerOfTwo(4))
console.log(isPowerOfTwo(5))

// Big-O: O(logn) - as the input size get half on every iteration.

/**
 * Optimised solution
 */

 const isPrimeOptimised = (n) => {
    if (n < 1) return true;
    return (n & (n - 1)) === 0;
  };
  
  console.log(isPrimeOptimised(2));
  console.log(isPrimeOptimised(0));
  console.log(isPrimeOptimised(3));
  console.log(isPrimeOptimised(4));
  console.log(isPrimeOptimised(5));
  
  // Big-O: O(1)

  /**
   * In Binary that is power of 2 except 0
   * ends with 0
   * 
   */