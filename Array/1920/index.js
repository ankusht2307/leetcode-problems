// 1920. Build Array from Permutation
// https://leetcode.com/problems/build-array-from-permutation/

const buildArray = (nums) => {
  // check if the array is empty
  if (nums.length === 0) return null;

  let tempArray = [];
  // run a for loop
  for (let i = 0; i < nums.length; i++) {
    tempArray.push(nums[nums[i]]);
  }

  return tempArray;
};

const nums = [0, 2, 1, 5, 3, 4];

const builtArray = buildArray(nums);
console.log(builtArray);
