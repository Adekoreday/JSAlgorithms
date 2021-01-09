
function power (x, n) {
    let newArray = [];
    for(let i=0; i<n; i++) {
      newArray.push(x);
    }
    const power = newArray.reduce((curr, acc) => {
      return acc *= curr
    }, 1)
    return power;
  }
  
  function root(x, n) {
    let arr = [];
    // your code goes here
    for(i=0; i<x; i+=0.001) {
      arr.push(i)
    };
   return binarySearch(arr, x, n )
  }
  
  
  function binarySearch (arr, x, n) {
    let begin = 0;
    let end = arr.length - 1;
    let middle = Math.floor((end - begin)/2);
    estimatedroot = power(arr[middle], n);
    while(estimatedroot != x ) {
      // condition 
     if(estimatedroot > x) {
       end = middle - 1;
     }
     if(estimatedroot < x) {
        begin = middle + 1;
      }
  
    if(begin > end) break;
  
      middle = Math.floor((begin + end)/2);
      estimatedroot = power(arr[middle], n);
    }
    return Math.abs(arr[middle]);
  }  

 console.log(root(7,3));