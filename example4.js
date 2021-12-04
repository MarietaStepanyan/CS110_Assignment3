/* Create a function that checks if a number is a palindrome by calling the
functions from question 3. */


function reverse(n)  {
    let result = []
    
    while(n>9)  {
        result.push(n%10)
        n = (n-n%10)/10
    }

    result.push(n)
    return result.join("")
}

function isPalindrome(n) {
    let a = []
    a.push(n)
    return (reverse(n)===a.join(""))  
    
}

console.log(`${isPalindrome(1554)}`) 