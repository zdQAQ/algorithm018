var moveZeroes = function(nums) {
    // 双指针，不等于0的值往前放
    for(let i=0,s=0;i<nums.length;i++){
        if(nums[i]!==0){
            swap(nums,s++,i)
        }
    }
};

function swap(arr,a,b){
    let temp = arr[a]
    arr[a] = arr[b] 
    arr[b] = temp
}

// var moveZeroes = function(nums) {
//     let n = 0;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]===0){
//             nums.splice(i,1)
//             i--
//             n++
//         }
//     }
//     for(let i=0;i<n;i++){
//         nums.push(0)
//     }
//     return nums
// };