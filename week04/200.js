// 思路：深度搜素遍历，去过的陆地标记为‘0’，然后走水平和竖直方向，为‘0’就不用管
var numIslands = function(grid) {
    let res = 0
    const dfs = (grid,i,j) => {
        const m = grid.length
        const n = grid[0].length

        grid[i][j] = '0'
        if(i-1>=0 && grid[i-1][j] === '1') dfs(grid,i-1,j)
        if(i+1<m && grid[i+1][j] === '1') dfs(grid,i+1,j)
        if(j-1>=0 && grid[i][j-1] === '1') dfs(grid,i,j-1)
        if(j+1<n && grid[i][j+1] === '1') dfs(grid,i,j+1)
    }
    const m = grid.length
    if(!m){
        return 0
    }
    const n = grid[0].length
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j] === '1'){
                res++
                dfs(grid,i,j)
            }
        }
    }
    return res
};