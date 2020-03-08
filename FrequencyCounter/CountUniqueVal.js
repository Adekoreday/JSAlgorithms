/**
 * 
 *  counts the unique value in an array in js
 */
function countUniqueValues(arr){
    //convert array to object
    const newObj = {};
    let uniqueNo = 0;
    if (arr.length <= 0) return false;
    for(var i= 0; i< arr.length; i++){
      const arrval = arr[i];
      newObj[arrval] ? newObj[arrval] += 1 : newObj[arrval] = 1;
     }
     console.log(newObj);
      const objKeys = Object.keys(newObj);
      objKeys.map(x => {
        if(newObj[x] == 1) {
          uniqueNo++
        }
      })
    
      console.log(uniqueNo);
    }