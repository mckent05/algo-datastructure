

const longestSubstringKDistinct = (string, k) => {
  const strMap = new Map()
  let start = 0
  let maxValue = -Infinity

  for(let end = 0; end < string.length; end++) {
    const  endChar = string[end]

    strMap.has(endChar) ? strMap.set(endChar, strMap.get(endChar) + 1) : strMap.set(endChar, 1)

    while(strMap.size > k) {
      strMap.set(string[start], strMap.get(string[start]) - 1)
      if(strMap.get(string[start]) === 0) {
        strMap.delete(string[start])
      }
      start++
    }
    maxValue = Math.max(maxValue, (end - start) + 1)
  }
  return maxValue
}

console.log(longestSubstringKDistinct('AAAHHIBC', 3))