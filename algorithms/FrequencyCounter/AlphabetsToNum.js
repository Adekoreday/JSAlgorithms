/**Example
 * Convert Alphabets in a string to thier no qquivalent and no to their alphabets equivalent
 * e.g. AlphabetsToNumber("abutrghjiuytewsdcvbcdefgh12345678");
 */

function AlphabetsToNumber(string1){
    if(string1.length < 1) return false;
 
   let stringObj = {};
 
   for(var i=1; i<string1.length; i++){
     let str = string1.charCodeAt(i);
     if((str > 48 && str < 57)) {
       str += 48;
     stringObj[i] = String.fromCharCode(str);
     }
     else if((str > 58 && str < 123)){
       console.log("this is the charcode", str);
 
       if(str < 107){
         str -= 49;
         stringObj[i] = String.fromCharCode(str);
       }
       else if(str >= 107 && str <= 117){
         str -= 59;
         stringObj[i] = `1${String.fromCharCode(str)}`
       }
       else if(str >= 117){
          str -= 69;
         stringObj[i] = `2${String.fromCharCode(str)}`
       }
     }
   }
 
 console.log(stringObj, "this is the string ");
   return stringObj;
 }
