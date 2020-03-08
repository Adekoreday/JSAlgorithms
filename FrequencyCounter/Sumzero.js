 //find two elements of a sorted array whos sum is zero
// returns the array that contains two elements whose sum //is equal to zero.
//note sorted array

function sumZero(arr) {
    var arr1=[];
    for(let i=0; i< arr.length; i++){
      var initialVal = arr[i];
       for(let j=i+1; j< arr.length; j++) {
         if(arr[i] + arr[j] === 0){
           arr1.push(initialVal);
           arr1.push(arr[j]);
         }
       }
    }
    if (arr1.length == 0) {
      return false
      }else{
        return arr1
        };
  }
  