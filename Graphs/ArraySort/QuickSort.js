const quickSort = (array, start, end) => {
    if(start > end) {
        return
    }

    let pivot = partitionArray(array, start, end)
    quickSort(array, start, pivot - 1)
    quickSort(array, pivot + 1, end)
}

const partitionArray = (array, start, end) => {
    const i = start - 1
    const pivot = array[end]
    for(j= start; j < end - 1; j++) {
        if(array[j] < pivot) {
            i++
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
    i++
    const temp = array[i]
    array[i] = array[end]
    array[j] = temp
    return i

}

const array = [5,4,3,7,8,2,1,6,9,0]

quickSort(array, 0, 9)
console.log(array)