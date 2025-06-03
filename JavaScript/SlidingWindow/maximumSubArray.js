// find the maximum subarray of of a fixed size k

const maximumSubArray = (array, k) => {
  let maxValue = -Infinity
  let currentRunningSum = 0

  for(let i = 0; i < array.length; i++) {
    currentRunningSum += array[i]

    if(i >= (k - 1)) {
      maxValue = Math.max(maxValue, currentRunningSum)
      currentRunningSum -= array[i - (k-1)]
    }
  }
  return maxValue
}

console.log(maximumSubArray([4,2,1,7,8,1,2,8,1,0], 3))