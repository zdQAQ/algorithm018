/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    const valid = (s,start,end) => {
        while(start<end){
            if(s[start++]!==s[end--]){
                return false
            }
        }
        return true
    }
    let start=0,end=s.length-1
    while(start<end){
        if(s[start]!==s[end]){
            return valid(s,start+1,end)||valid(s,start,end-1)
        }
        start++
        end--
    }
    return true
};