const getLongestKUniqueSubString = (str, k) => {
    // Initialize pointers for start, left, right pointers
    let start = 0, left = 0, right = 0
    let maxLength = 0 //initialize maxlength
    const charCountMap = new Map() //Initalize map for keep track of added characters

    // start expanding right window
    while(right < str.length) {
        let rightChar =  str[right]
        charCountMap.set(rightChar, (charCountMap.get(rightChar)||0) + 1)
        right++


        while(charCountMap.size > k) {
            let leftChar = str[left]
            charCountMap.set(leftChar, charCountMap.get(leftChar) -1 )
            if(charCountMap.get(leftChar) === 0) {
                charCountMap.delete(leftChar)
            }
            left++
        }

        if(charCountMap.size === k && right - left > maxLength) {
            maxLength = right - left
            start = left
        }

    }
    return str.substring(start, start + maxLength)
}

console.log(getLongestKUniqueSubString("abcbdbdbbdcdabd", 3))
