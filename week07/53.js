/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxThis = nums[0]
    let maxAll = nums[0]
    for(let i=1;i<nums.length;i++){
        maxThis = Math.max(nums[i],nums[i]+maxThis)
        maxAll = Math.max(maxAll,maxThis)
    }
    return maxAll
};