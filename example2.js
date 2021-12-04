/* Create a function that takes two numbers as its arguments and returns an
array that contains all the prime numbers between them inclusively. This
function must call your function from question 1 to check each number.*/

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

function PrimesBetween(a, b) {
let result = []

for(; a<=b ; a++ ) {
    if(PrimeNumbers(a)===true) {
       result.push(a)
    } }

    return result
}

console.log(PrimesBetween(1, 15)) 
