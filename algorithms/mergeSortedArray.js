const mergeSortedArray = (arr1, arr2) => {
    let i =0;
    let j = 0;
    let result = [];
    while(arr1[i] || arr2[j]) {
      if(arr1[i] <= arr2[j]) {
        result.push(arr1[i++]);
      }else{
        result.push(arr2[j++]);
      }
    }
    return result;
  }
  
  console.log(mergeSortedArray([1,2,3,4], [1,5,6,7,8]));
  