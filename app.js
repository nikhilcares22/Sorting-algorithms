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


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal
    }
    return arr;
}

insertionSort([2, 1, 9, 76, 4])
