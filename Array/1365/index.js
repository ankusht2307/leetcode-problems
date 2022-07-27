// 1365. How Many Numbers Are Smaller Than the Current Number
// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = function(nums) {
    let result = [];
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(nums[i] != nums[j] && nums[i] > nums[j]) {
                count++
            }
        }
        result.push(count);
        count = 0;
    }
    return result;
};

const nums = [8,1,2,2,3];
const result = smallerNumbersThanCurrent(nums);
console.log(result);