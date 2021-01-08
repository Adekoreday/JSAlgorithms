const newString = "helloworldaderhel"

const countSubString = (x, substr) => {  
    let count = 0;
    for(i=0; i<x.length; i++) {
      for(j=0; j< substr.length; j++) {
        if(substr[j] !== x[i+j]){
          break;
        }
        if(j === substr.length - 1) ++count
      }
    }
    return count;
  }

console.log(countSubString(newString, 'hell'), 'new string>>>');
