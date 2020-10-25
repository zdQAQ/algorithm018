/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    const dic = Array(10).fill(0)
    let m = n = 0
    for(let i=0;i<secret.length;i++){
        if(secret[i]===guess[i]){
            m++
        }else{
            if(dic[secret[i]]++ < 0) n++
            if(dic[guess[i]]-- > 0) n++
        }
    }
    return m+'A'+n+'B'
};