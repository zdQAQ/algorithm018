/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const rowIndex = getRow(matrix, target)
    if(rowIndex===undefined) return false
    return binarySearch(matrix[rowIndex], target)
};

function getRow(matrix, target) {
    const minArr = matrix.map(row=>row[0])
    for(let i=1;i<=minArr.length;i++){
        if(minArr[i]!==undefined){
            if(target>=minArr[i-1] && target<minArr[i]){
                return i-1
            }
        }else if(target>=minArr[i-1]){
            return i-1
        }
    }
}

function binarySearch(arr, target){
    let left = 0
    let right = arr.length - 1
    let mid = left + Math.floor((right-left)/2)
    while(left<=right){
        if(arr[mid]<target){
            left = mid+1
            mid = left + Math.floor((right-left)/2)
        }else if(arr[mid]>target){
            right = mid-1
            mid = left + Math.floor((right-left)/2)
        }else{
            return true
        }
    }
    return arr[0]===target
}