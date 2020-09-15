// euclids algorithm finds the greatest common denomenator (GCD) of two integers, until the remainder is 0
// for example gcd of 20 and 8 is 4

var gcd = function(a, b) {  
    if (!b) {  
        return a;  
    }  
 
    return gcd(b, a % b);  
 };  
 console.log(gcd(20, 8));