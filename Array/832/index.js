// 832. Flipping an Image
// https://leetcode.com/problems/flipping-an-image/

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  for (let row = 0; row < image.length; row++) {
    let left = 0;
    let right = image.length - 1;
    while (left < right) {
      let temp = image[row][left];
      image[row][left] = image[row][right];
      image[row][right] = temp;
      left++;
      right--;
    }
  }

  for (let row = 0; row < image.length; row++) {
    for (let col = 0; col < image[row].length; col++) {
      image[row][col] === 1 ? (image[row][col] = 0) : (image[row][col] = 1);
    }
  }

  return image;
};

const image = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];
const flippedImage = flipAndInvertImage(image);
console.log(flippedImage);
