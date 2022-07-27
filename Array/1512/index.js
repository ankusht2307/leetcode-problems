// 1512. Number of Good Pairs
// https://leetcode.com/problems/number-of-good-pairs/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    let goodPairs = 0;
    for (let i = 0; i < nums.length; i++) {
        let element = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
                if(element === nums[j]) {
                    goodPairs++;
                }
        }
    }
    return goodPairs;
};

const nums = [1,2,3,1,1,3];
const goodPairs = numIdenticalPairs(nums);
console.log(goodPairs);