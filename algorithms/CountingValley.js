// Complete the countingValleys function below.
function countingValleys(n, s) {
    let valleysCount =0;
    let valleyStatus=0;
     let mountainStatus =0;
    let location =0;
    
    let array1 = s.split("");
    for(let i=0; i< n ; i++) {
       if(array1[i] === 'U') {
            location += 1;
       }else {
           location -=1;
       }
       console.log(location, 'location');
       if(location < 0 && valleyStatus !== 1) {
           valleyStatus =1;
           mountainStatus = 0;
           valleysCount +=1;
       }
    
       if(location === 0) {
            valleyStatus =0;
           mountainStatus = 0;
       }
          if(location > 0 && mountainStatus !== 1) {
           mountainStatus = 1;
                valleyStatus= 0;
       }
    }
    return valleysCount;
    }

    console.log(countingValleys(12, 'DDUUDDUDUUUD'), "valleys";