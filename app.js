const swap = (arr,i,j)=>{
    [arr[i],arr[j]]=[arr[j],arr[i]]
}
function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
      let min = i;
      for(let j =i+1;j<arr.length;j++){
          if(arr[j]<arr[min]){
              min = j
          }
        }
        if(i!==min)swap(arr,i,min)
    }
    return arr;
}

console.log(selectionSort([44,1,55,15,6]))