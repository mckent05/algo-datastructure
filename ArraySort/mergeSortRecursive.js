const mergeSort = (array) => {
    if(array.length <= 1) {
        return;
    }
    const mid  = Math.floor(array.length / 2)
    const leftArray = array.slice(0, mid)
    const rightArray = array.slice(mid, array.length)
    mergeSort(leftArray)
    mergeSort(rightArray)
    sort(leftArray, rightArray, array)
}

const sort = (leftArray, rightArray, array) => {
    const leftArraySize = Math.floor(array.length/2)
    const rightArraySize = array.length - leftArraySize
    let i = 0, l = 0, r = 0;
    
    while( l < leftArraySize && r < rightArraySize ) {
        if(leftArray[l] < rightArray[r]) {
            array[i] = leftArray[l]
            i++
            l++
        }  else {
            array[i] = rightArray[r]
            i++
            r++
        }
    }
    while( l < leftArraySize) {
        array[i] = leftArray[l]
        i++
        l++
    }
    while(r < rightArraySize) {
        array[i] = rightArray[r]
        i++
        r++
    }
}
const array = [2,4,12,45,67,89,11,34,55,67,88,99]

mergeSort(array)

console.log(array)