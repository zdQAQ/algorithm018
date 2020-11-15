/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    // 只要是5块，就是进账，计算赚了多少，用于以后找零
    // 顺序算，赚的钱大于等于用户给的钱-5即可
    const change = {
        5: 0,
        10: 0
    }
    for(let i=0;i<bills.length;i++){
        if(bills[i] === 5){
            change['5'] ++
        }else if(bills[i] === 10){
            if(change['5']*5+5>=10){
                change['5']--
                change['10']++
            }else{
                return false
            }
        }else if(bills[i] === 20){
            if(change['10']){
                if(change['5']){
                    change['5']--
                    change['10']--
                }else{
                    return false
                }
            }else{
                if(change['5']>=3){
                    change['5'] = change['5']-3
                }else{
                    return false
                }
            }
        }
    }
    return true
};