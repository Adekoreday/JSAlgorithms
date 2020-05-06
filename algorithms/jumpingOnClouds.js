/*Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus.
 She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . She must avoid the thunderheads.
 Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.
For each game, Emma will get an array of clouds numbered  if they are safe or  if they must be avoided. For example,  indexed from . 
The number on each cloud is its index in the list so she must avoid the clouds at indexes  and . She could follow the following two paths:  or . 
The first path takes  jumps while the second takes .

Sample Input
7
0 0 1 0 0 1 0
ans= 4
6
0 0 0 0 1 0
ans=3

*/

function jumpingClouds(c) {
    let steps = -1;
     for (let i=0; i< c.length; i++){
       console.log(i,c[i], 'iteration')
       const elem = c[i];
       if(elem === 0) {
         if ((c[i + 1] + c[i + 2]) === 0 ) {
           ++i 
            console.log('skipping at ', i);
           }
         steps += 1;
       }
     }
     return steps;
    }

console.log(jumpingClouds([0,0,0,0,1,0]));
console.log(jumpingClouds([0,0,1,0,0,1,0]));