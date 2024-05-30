const zigZag  = (input) => {
 input = input.sort((a, b) => a - b)
 const k  = Math.floor((input.length - 1) / 2)
 const leftArray = input.slice(1, k+1)
 const rightArray = input.slice(k+1, input.length)
 input =[ input[0], ...rightArray, ...leftArray.reverse()]
 console.log(input)
}

// const perfomZigZag = (arr, i , j) => {
//     if(i ===  j) return
//     perfomZigZag(arr, i + 1, j - 1)
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp 
// }
const array = [1,6,8,9,10,11,23,23,45,67,88,99]
zigZag(array)
// perfomZigZag(array, 1, array.length)
// console.log(array)
