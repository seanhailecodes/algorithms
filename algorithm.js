// euclids algorithm finds the greatest common denomenator (GCD) of two integers, until the remainder is 0
// for example gcd of 20 and 8 is 4

function gcd_rec(a, b) {
    if (b) {
        return gcd_rec(b, a % b);
    } else {
        return Math.abs(a);
    }
}