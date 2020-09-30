// recusrsion

function efun(num){
   if (num==0)
    return 1 
       else
    return num * efun(num-2)
  }

console.log(efun(8))



// euclids algorithm finds the greatest common denomenator (GCD) of two integers, until the remainder is 0
// for example gcd of 20 and 8 is 4

var gcd = function(a, b) {  
   if (!b) {  
       return a;  
   }  

   return gcd(b, a % b);  
};  
console.log(gcd(20, 8));