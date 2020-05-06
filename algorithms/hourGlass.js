//find the maximum sum of a combination of hour glass in the array
/** 

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
*/

function hourGlass(arr) {
  let sum = [];
  for(let x=0; x<4; x++){
    for(let y=0; y<4; y++){
        let firstLine = arr[x][y] + arr[x][y+1] + arr[x][y+2];
        let secondLine =  arr[x+1][y+1]
        let thirdLine =arr[x+2][y] + arr[x+2][y+1] + arr[x+2][y+2];
        const tempSum = firstLine+secondLine+thirdLine;
         sums.push(parseInt(firstLine) + parseInt(secondLine) + parseInt(thirdLine));
     }
   }
   return Math.max.apply(Math, sums);
 };