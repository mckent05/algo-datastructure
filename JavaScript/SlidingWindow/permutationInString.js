// Given two strings s1 and s2, return true if s2 contains a permutation of s1.
const permutationInstring = (target, string) => {
  let runningString = ''
  let result = false

  for(let i = 0; i < string.length; i++) {
    runningString += string[i]

    if(i >= target.length -1) {
      runningString = runningString.slice(i - (target.length -1), runningString.length)
      result = string.includes(target)
    }
    if(result){
      break
    }
  }
  return result
}

console.log(permutationInstring("ab", "cdbapol"))