/**
 * 当遇到二维数据结构的时候，单纯的循环需要转变为递归，
 * 相当于单通道解决问题变为多个通道一并解决问题
 */
var lowestCommonAncestor = function(root, p, q) {
    let ans = null
    const dfs = (root,p,q) => {
      if(root === null){
        return false
      }
      const lk = dfs(root.left,p,q)
      const rk = dfs(root.right,p,q)
      if(lk && rk){
        ans = root
      }
      if((lk || rk)&&(root.val === p.val || root.val === q.val)){
        ans = root
      }
      return root.val === p.val || root.val === q.val || lk || rk
    }
    dfs(root,p,q)
    return ans

};