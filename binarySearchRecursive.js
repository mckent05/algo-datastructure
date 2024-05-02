const binarySearchOrderedlist = (list, start, end, number) => {
    const mid = Math.floor((start+end)/2)
    if(start > end) {
        return -1
    }
    if( number === list[mid]) {
        return mid
    }
    if(number < list[mid]) {
        return binarySearchOrderedlist(list, start, mid-1, number)
    }
    return binarySearchOrderedlist(list, mid+1, end, number)
}
console.log(binarySearchOrderedlist([1,2,3,4,5,6,7,8], 0, 9, 12))