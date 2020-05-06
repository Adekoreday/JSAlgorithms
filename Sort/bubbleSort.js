function BubbleSort (unsortedArray) {
    let length = unsortedArray.length;
    for(var j =length; j > 0; j--) {
    let noSwap = true;
    for (var i=0; i< length-1; i++) {
      if(unsortedArray[i] > unsortedArray[i+1]) {
        noSwap = false;
        const nextVal = unsortedArray[i + 1];
        unsortedArray[i+1] = unsortedArray[i];
        unsortedArray[i] = nextVal;
      }
    }
    if(noSwap === true) break;
  }
  return unsortedArray;
  }
  
  console.log(BubbleSort([1,34,56,3,2,7,9,0]))