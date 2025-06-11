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

const minimumSumSubArray2 = (array, target) => {
    const countArray = []
    for(let i =0; i<array.length; i++){
        let subArray = array.slice(i, array.length)
        let total = subArray.reduce((acc, value) => acc+value, 0)
        if(total === target) {
            countArray.push(subArray.length)
            break;
        }else {
            for(let j =0; j<subArray.length; j++) {
                let subArrayCopy = [...subArray]
                subArrayCopy.splice(j,1)
                let newTotal =subArrayCopy.reduce((acc, value) => acc + value, 0)
                newTotal === target && countArray.push(subArrayCopy.length)
            }
        }
    }
    return countArray.length > 0 ? Math.min(...countArray) : 0
}

console.log(minimumSumSubArray2([5,1,3,5,10,7,4,9,2,8],15))