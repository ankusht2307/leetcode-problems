// 34. Find First and Last Position of Element in Sorted Array
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

var searchRange = function (nums, target) {
  // check if array is empty
  let ans = [-1, -1];
  if (nums.length === 0) return ans;

  function search(arr, tar, findStart) {
    let start = 0;
    let end = arr.length - 1;
    let temp = -1;
    while (start <= end) {
      let mid = Math.floor(start + (end - start) / 2);
      if (tar > arr[mid]) {
        start = mid + 1;
      } else if (tar < arr[mid]) {
        end = mid - 1;
      } else {
        temp = mid;
        if (findStart) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      }
    }

    return temp;
  }

  ans[0] = search(nums, target, true);
  ans[1] = search(nums, target, false);

  return ans;
};

const nums = [5,7,7,8,8,10];
const target = 5;

const indexes = searchRange(nums, target);
console.log(indexes);
