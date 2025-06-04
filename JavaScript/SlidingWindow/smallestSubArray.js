// find the smallest subarray in >= a give number

const smallestSubArray = (target, array) => {
  let smallestValue = Infinity
  let currentRunningSum = 0
  let windowStart = 0

  for(let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    currentRunningSum += array[windowEnd]

    while(currentRunningSum >= target) {
      smallestValue = Math.min(smallestValue, (windowEnd - windowStart) + 1 )
      currentRunningSum -= array[windowStart]
      windowStart++
    }
  }
  return smallestValue
}

console.log(smallestSubArray(8, [4,2,2,7,8,1,2,8,10]))