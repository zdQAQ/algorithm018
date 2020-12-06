/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) { return 0 }
    let beforeQueue = [[beginWord, 1]] // 从起点出发
    let endQueue = [[endWord, 1]] // 从终点出发
    const wordListSet = new Set(wordList)
    while(beforeQueue.length && endQueue.length) { // 只有两者都不为空时，循环才继续，如果有一者为空，表示某一边已经走死，不能继续
        if (beforeQueue.length > endQueue.length) {
            [beforeQueue, endQueue] = [endQueue, beforeQueue] // beforeQueue始终保持较小
        }
        const currentLevelSize = beforeQueue.length
        for (let i = 0; i < currentLevelSize; i++) {
            const [word, level] = beforeQueue.shift()
            for (let l = 0; l < word.length; l++) { // 遍历单词，把能转换的单词push入队列
                for (let charCode = 97; charCode <= 122; charCode++) {
                    const newWord = `${word.slice(0, l)}${String.fromCharCode(charCode)}${word.slice(l + 1)}`
                    const index = endQueue.findIndex(item => item[0] === newWord)
                    if (index !== -1) { // 这里不需要判断newWord是否在wordList中，因为endQueue中存在的单词必定在wordList中
                       return endQueue[index][1] + level
                    }
                    if (wordListSet.has(newWord)) {
                        beforeQueue.push([newWord, level + 1])
                        wordListSet.delete(newWord)
                    }
                }
            }
        }
    }
    return 0
};