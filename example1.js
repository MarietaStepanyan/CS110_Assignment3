
/* Create a function that takes a number as its argument and returns true if a
number is a prime number and false otherwise. Hint: A number is a prime
number when it is divisible only by one and itself. If a number is not divisible
to any number starting 2 to the SQRT of itself, then that number is a prime
number. */

function PrimeNumbers (n) {
 if (n === 1) {
    return false
} else {
    for (let a = 2; a <= n ** 0.5; a++)  
{
    if (n % a === 0) {
        return false
    }
 }
 return true }
}

console.log(PrimeNumbers(1))

