const binarysearch = (arr, val) => {
  let middle = Math.floor((arr.length - 1)/2);
  let leftpointer = 0;
  let rightpointer = arr.length - 1;
  let searchValue = {element: 0, index: 0};
  while(arr[middle] !== val ) {
    if(arr[middle] > val) {
      rightpointer = middle - 1;
    }
    if(arr[middle] < val) {
      leftpointer = middle + 1;
    }
    if(leftpointer > rightpointer) break;
    middle = Math.floor((rightpointer + leftpointer)/2)
  }
   searchValue.element = arr[middle] === val ?  searchValue = {element: arr[middle], index: middle} :
   searchValue = {element: -1, index: undefined} ;
   return searchValue;
}

const arr = [1,2,3,4,5,6,7,8];

binarysearch(arr, 8)