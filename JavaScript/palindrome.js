const getPalindrome = (string) => {
    if(string.length === 0 || string.length === 1) {
        return true
    }
    if(string.charAt(0) === string.charAt(string.length -1)) {
        return getPalindrome(string.substring(1, string.length - 1))
    }
    return false
}