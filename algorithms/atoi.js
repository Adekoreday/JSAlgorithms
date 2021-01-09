/**
Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.
 */
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();
    const length = s.length;
    if(length >= 200) return 0;
    let s3='-+'
    console.log(s3.charCodeAt(0))
       console.log(s3.charCodeAt(1))
    let totalIntegr = 0;
    let maximumInteger = 2147483648;
    let newNumber = 0;
    let i=0;
    let sign = 1;
    let firstString = s.charCodeAt(0);
    if(firstString == 45) {
      console.log(firstString, 'firstString')
      sign = -1;
      i++;
    }
    if(firstString == 43) {
      sign = 1;
      i++
    }
    for(i; i < length; i++) {  
        newNumber = s.charCodeAt(i) -  48; 
        if(newNumber < 0 || newNumber > 9) break;
        totalIntegr = totalIntegr * 10 + newNumber;
        if(totalIntegr > 2147483648) totalIntegr=2147483648;
    }
    return totalIntegr * sign;
};