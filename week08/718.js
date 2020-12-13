const findLength = (A, B) => {
    const m = A.length;
    const n = B.length;
    let res = 0;
    // A固定，移动B
    for (let i = 0; i <= n; i++) {
      const len = Math.min(m, n - i); // 当前窗口的长度
      const maxLen = getMaxLen(A, B, 0, i, len); //窗口左端是A[0]，窗口左端是B[i]
      res = Math.max(res, maxLen);
    }
    // B固定，移动A
    for (let i = 0; i <= m; i++) {
      const len = Math.min(n, m - i); // 当前窗口的长度
      const maxLen = getMaxLen(A, B, i, 0, len);//窗口左端是A[i]，窗口左端是B[0]
      res = Math.max(res, maxLen);
    }
    return res;
  };
  // 窗口左端对应A的位置是aStart，窗口左端对应B的位置是bStart
  function getMaxLen(A, B, aStart, bStart, windowLen) {
    let res = 0;
    let subLen = 0;
    for (let i = 0; i < windowLen; i++) { // 遍历的范围是窗口的长度
      if (
        A[aStart + i] !== undefined &&    // 没有越界
        B[bStart + i] !== undefined &&    // 没有越界
        A[aStart + i] == B[bStart + i]    // 当前项相同
      ) {
        subLen++;                         // subLen累加1
      } else {
        subLen = 0;                       // 这个窗口有“杂质”，废了
      }
      res = Math.max(res, subLen);        
    }
    return res;
  }