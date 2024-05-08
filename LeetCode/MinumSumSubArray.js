const minimumSumSubArray = (array, target) => {
    let sum;
    let count;
    let countArray = []
    for(let i = 0; i < array.length; i++) {
        for(let j = i; j < array.length;) {
            sum = 0
            count = 0
            while(sum <= target || array[j] === target) {
                sum += array[j]
                count++
                j++
                if(sum === target) {
                    countArray.push(count)
                }
                if(sum > target) {
                    break;
                }
            }
            break;
        }
    }
    return countArray.length > 0 ? Math.min(...countArray) : 0
}

console.log(minimumSumSubArray([1,1,1,1,1,1,1,1],5))