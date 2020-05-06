
function BinarySearch(arr, elem){
  let start= 0;
  let end = arr.length - 1;
  let middle = Math.floor((end)/2);
    console.log(start,middle,end);
  while(arr[middle] !== elem && start <= end)
  {
    
    if(arr[middle] > elem){
      end = middle - 1;
      console.log("reducing end...");
    }else{
      start = middle + 1;
        console.log("increasing start...");
    }
    middle = Math.floor((end + start)/2);
    console.log(start,middle,end);
  }
  if(arr[middle] === elem){
    return middle
  }return -1;
}

//[1,2,3,4,5,6]

module.exports = BinarySearch;
