
function reverseArray(a){
  let newString = [];
 for(let i = a.length - 1; i >=0; i--){
  newString.push(a[i]);
  }
}

console.log(reverseArray([1,4,3,2]));