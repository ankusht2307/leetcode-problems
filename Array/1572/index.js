// 1572. Matrix Diagonal Sum
// https://leetcode.com/problems/matrix-diagonal-sum/

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let sum = 0;
  if (mat.length === 1 && mat[0].length === 1) {
    return mat[0][0];
  }
  for (let row = 0; row < mat.length; row++) {
    sum += mat[row][row] + mat[row][mat.length - 1 - row];
  }

  if (mat.length % 2 !== 0) {
    sum = sum - mat[Math.floor(mat.length / 2)][Math.floor(mat.length / 2)];
  }

  return sum;
};
