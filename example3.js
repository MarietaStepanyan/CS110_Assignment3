/* Create a function that returns the reverse number of a given number.
Example: input = 123 -> returns: 321. */


function reverse(n)  {
    let result = []
    
    while(n>9)  {
        result.push(n%10)
        n = (n-n%10)/10
    }

    result.push(n)
    return result.join("")
}

console.log(reverse(1544))

