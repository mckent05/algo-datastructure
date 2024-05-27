const quickSort = (array, start, end) => {
    if(start > end) {
        return
    }

    let pivot = partitionArray(array, start, end)
    quickSort(array, start, pivot - 1)
    quickSort(array, pivot + 1, end)
}

const partitionArray = (array, start, end) => {
    let i = start - 1
    const pivot = array[end]
    for(j= start; j <= end - 1; j++) {
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

const array = [2,4,12,45,67,89,11,34,55,67,88,99]

quickSort(array, 0, 11)
console.log(array)