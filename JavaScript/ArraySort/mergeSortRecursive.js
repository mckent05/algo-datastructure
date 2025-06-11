// const mergeSort = (array) => {
//     if(array.length <= 1) {
//         return;
//     }
//     const mid  = Math.floor(array.length / 2)
//     const leftArray = array.slice(0, mid)
//     const rightArray = array.slice(mid, array.length)
//     mergeSort(leftArray)
//     mergeSort(rightArray)
//     sort(leftArray, rightArray, array)
// }

// const sort = (leftArray, rightArray, array) => {
//     const leftArraySize = Math.floor(array.length/2)
//     const rightArraySize = array.length - leftArraySize
//     let i = 0, l = 0, r = 0;
    
//     while( l < leftArraySize && r < rightArraySize ) {
//         if(leftArray[l] < rightArray[r]) {
//             array[i] = leftArray[l]
//             i++
//             l++
//         }  else {
//             array[i] = rightArray[r]
//             i++
//             r++
//         }
//     }
//     while( l < leftArraySize) {
//         array[i] = leftArray[l]
//         i++
//         l++
//     }
//     while(r < rightArraySize) {
//         array[i] = rightArray[r]
//         i++
//         r++
//     }
// }
// const array = [2,4,12,45,67,89,11,34,55,67,88,99]

// mergeSort(array)

// console.log(array)

const mergeSort = (array) => {
  if(array.length <=1 ) {
    return;
  }
  const midPoint = Math.floor(array.length / 2)
  const leftSideArray = array.slice(0, midPoint)
  const rightSideArray = array.slice(midPoint, array.length)
  mergeSort(leftSideArray)
  mergeSort(rightSideArray)

  sort(leftSideArray, rightSideArray, array)
}

const sort = (leftSideArray, rightSideArray, array) => {
  const leftArrayLength = leftSideArray.length
  const rightArrayLength = array.length - leftArrayLength
  let i= 0, l=0, r=0;

  while(l < leftArrayLength && r < rightArrayLength) {
    if(leftSideArray[l] < rightSideArray[r]) {
      array[i] = leftSideArray[l]
      i++
      l++
    } else {
      array[i] = rightSideArray[r]
      i++
      r++
    }
  }
  while(l < leftArrayLength) {
    array[i] = leftSideArray[l]
    i++
    l++
  }
  while(r < rightArrayLength) {
    array[i] = rightSideArray[r]
    i++
    r++
  }
}

const array = [90,89, 78, 65, 65, 63, 60, 40, 30, 20, 19]

mergeSort(array)

console.log(array)