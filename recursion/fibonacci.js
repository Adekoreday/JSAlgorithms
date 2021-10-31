// Uo = 0
// U1 = 1
//Un = Un-1  + Un-2

//1,3,4,7,11


function fibonacci (n) {
    if(n == 1) return 1;
    if(n == 0) return 0;
    return (fibonacci(n-1) + fibonacci(n-2))

}