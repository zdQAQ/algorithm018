/**
 * 考虑到会有更简单的办法，但是思路上想不到，还是做题做得不够吧
 * 需要注意的点
 * 1.JS SORT对负数的处理
 * 2.边界条件
 * 3.审题
 */
var threeSum = function(nums) {
    const ans = []
    nums.sort((a,b)=>a-b)
    for(let first=0;first<nums.length;first++){
        if(first>0 && nums[first]===nums[first-1]){
            continue
        }
        let third = nums.length - 1
        let target = -nums[first]
        for(let second = first+1;second<nums.length;second++){
            if(second>first+1 && nums[second]===nums[second-1]){
                continue
            }
            while(second<third && (nums[second]+nums[third]>target)){
                third--
            }
            if(second === third){
                break;
            }
            if(nums[second]+nums[third]===target){
                ans.push([nums[first],nums[second],nums[third]])
            }
        }
    }
    return ans
};