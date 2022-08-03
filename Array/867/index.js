// 867. Transpose Matrix
// https://leetcode.com/problems/transpose-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  let tm = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!tm[j]) {
        tm[j] = [];
      }
      tm[j][i] = matrix[i][j];
    }
  }

  return tm;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const tm = transpose(matrix);
console.log(tm);