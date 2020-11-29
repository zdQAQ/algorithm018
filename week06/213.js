/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(!nums.length) return 0
    if(nums.length === 1) return nums[0]
    const getIt = (arr)=>{
        let pre=0, cur = 0,temp
        for(money of arr){
            temp = cur
            cur = Math.max(cur, pre+money)
            pre = temp
        }
        return cur
    }
    return Math.max(getIt(nums.slice(1)), getIt(nums.slice(0,-1)))
};