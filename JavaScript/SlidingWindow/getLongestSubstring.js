const getLongestSubString = (str) => {
    let maxLength = 0
    let charAtIndex = new Map()
    let start = 0
    for(let end = 0; end < str.length; end++) {
        if(charAtIndex.has(str[end])) {
            start = Math.max(start, charAtIndex.get(str[end]) + 1)
        }
        charAtIndex.set(str[end], end)
        maxLength = Math.max(maxLength, end - start + 1)
    }
    return maxLength
}

console.log(getLongestSubString("abcbdbdbbdcdabd"))