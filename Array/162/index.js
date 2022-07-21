// 162. Find Peak Element
// https://leetcode.com/problems/find-peak-element/

const findPeakElement = (nums) => {
    let start = 0;
    let end = nums.length - 1;
    while(start < end) {
        let mid = Math.floor(start + (end - start) / 2);
        // checking if middle element < middle + 1
        // if so move the start pointer to middle + 1
        // else decrease it. So window will be narrowing down
        // and at last we will be arriving at start = end
        // and that's our element.
        if(nums[mid] < nums[mid + 1]) {
            start = mid + 1;
        } else {
            end = mid
        }
    }
    return start;
};

const nums = [1,2,1,3,5,6,4];

const peakElementIndex = findPeakElement(nums);
console.log(peakElementIndex);