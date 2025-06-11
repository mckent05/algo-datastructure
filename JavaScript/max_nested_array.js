const myMax = (array) => {
  let maxNum = -Infinity
  for( item of array ) {
    if (Array.isArray(item)) {
      nested_array_max = myMax(item)
      maxNum = checkMax(nested_array_max, maxNum)
    }
    else {
      maxNum = checkMax(item, maxNum)
    }
  }
  return maxNum
}

const checkMax = (num, target) => {
  return (num > target ? num : target)
}

console.log(myMax([-1, [-2, [-3,-4], [-5, -6, [-1000, -20]], -200]]))