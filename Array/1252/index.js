// 1252. Cells with Odd Values in a Matrix
// https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  let matrix = [];
  for (let i = 0; i < m; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 0;
    }
  }
  for (let row = 0; row < indices.length; row++) {
    // incrementing matrix rows
    for (let i = 0; i < n; i++) {
      matrix[indices[row][0]][i] += 1;
    }
    // incrementing matrix cols
    for (let j = 0; j < m; j++) {
      matrix[j][indices[row][1]] += 1;
    }
  }

  // calculating odd nums
  let oddNums = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] % 2 !== 0) oddNums++;
    }
  }

  return oddNums;
};

let m = 2,
  n = 3,
  indices = [
    [0, 1],
    [1, 1],
  ];

const totalOddCells = oddCells(m, n, indices);
console.log(totalOddCells);
