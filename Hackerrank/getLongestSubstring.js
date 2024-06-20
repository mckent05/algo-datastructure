const getLongestSubString = (str) => {
    let countMaxSubtr = 0
    let maxSubStr = 0
    for(let i = 0; i <= str.length - 1; i++) {
        if(str[i] !== str[ i + 1]) {
            countMaxSubtr++
        }
        if(str[i] === str[i + 1]) {
            if(countMaxSubtr) {
                maxSubStr = countMaxSubtr > maxSubStr ? countMaxSubtr : maxSubStr
            }
            countMaxSubtr = 0
        }
    }
    if(countMaxSubtr) {
        maxSubStr = countMaxSubtr > maxSubStr ? countMaxSubtr : maxSubStr
    }
    return maxSubStr
}

console.log(getLongestSubString("abcabcbb"))