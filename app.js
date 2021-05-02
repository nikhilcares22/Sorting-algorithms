// const swap = (arr,i,j)=>{
//     [arr[i],arr[j]]=[arr[j],arr[i]]
// }
// function selectionSort(arr){
//     for(let i=0;i<arr.length;i++){
//       let min = i;
//       for(let j =i+1;j<arr.length;j++){
//           if(arr[j]<arr[min]){
//               min = j
//           }
//         }
//         if(i!==min)swap(arr,i,min)
//     }
//     return arr;
// }

// console.log(selectionSort([44,1,55,15,6]))


// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let currentVal = arr[i];
//         for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j + 1] = arr[j]
//         }
//         arr[j + 1] = currentVal
//     }
//     return arr;
// }

// insertionSort([2, 1, 9, 76, 4])


// function merge(arr1, arr2) {
//     let results = [];
//     let i = 0;
//     let j = 0;
//     while (i < arr1.length && j < arr2.length) {
//         if (arr2[j] > arr1[i]) {
//             results.push(arr1[i]);
//             i++;
//         } else {
//             results.push(arr2[j]);
//             j++;
//         }
//     }

//     while (i < arr1.length) {
//         results.push(arr1[i]);
//         i++;
//     }

//     while (j < arr2.length) {
//         results.push(arr2[j]);
//         j++;
//     }
//     return results;
// }

// function mergeSort(arr) {
//     if (arr.length <= 1) return arr;
//     let midPoint = Math.floor(arr.length / 2)
//     let left = mergeSort(arr.slice(0, midPoint))
//     let right = mergeSort(arr.slice(midPoint))
//     return merge(left, right)
// }

// let a = mergeSort([1, 5, 8, 3, 7, 23, 45, 11, 24])
// console.log(a)

// const swap = (arr, i, j) => {
//     [arr[i], arr[j]] = [arr[j], arr[i]]
// }


// function pivot(arr, start = 0, end = arr.length - 1) {
//     let pivot = arr[start];
//     let swapIdx = start;
//     for (let i = start + 1; i < arr.length; i++) {
//         if (pivot > arr[i]) {
//             swapIdx++;
//             swap(arr, swapIdx, i)
//         }
//     }
//     swap(arr, start, swapIdx)
//     return swapIdx
// }


// function quickSort(arr, left = 0, right = arr.length - 1) {
//     let pivotIndex = pivot(arr, left, right)
//     if (left < right) {
//         //left
//         quickSort(arr, left, pivotIndex - 1)
//         //right
//         quickSort(arr, pivotIndex + 1, right)
//     }
//     return arr
// }

// let a = quickSort([4, 8, 2, 1, 5, 7, 6, 3])
// console.log(a)

//RADIX SORT
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostDigits(arr) {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]))
    }
    return maxDigits;
}

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums)
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => [])
        for (let i = 0; i < nums.length; i++) {
            digitBuckets[getDigit(nums[i], k)].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
}
radixSort([23, 345, 5469, 12, 2354, 9584])