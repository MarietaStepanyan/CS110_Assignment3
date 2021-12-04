/* Create a function that sums two binary numbers. This function should put
every digit of both binary numbers into two separate arrays, one for each
argument, and make the length of those two arrays equal by adding zeros to
the left of the shorter one (using the unshift method). Add those digits with
the same index. Don’t forget to use the carry bit variable. */ 

function reverse(n)  {
    let result = []
    
    while(n>9)  {
        result.push(n%10)
        n = (n-n%10)/10
    }

    result.push(n)
    return result.join("")
}

function SumOfBinaries(array1, array2) {
   
    while (array1.length>array2.length) {
         array2.unshift(0)
        } 
        
    while (array1.length<array2.length) {
      array1.unshift(0)
     } 

array1.reverse()
array2.reverse()
{
for(i=0; i < array1.length ; i++)   {
    array1[i]=array1[i]+array2[i]
}

for(i = 0; i < array1.length ; i++)
{ 
  if(array1[i]>=2)
  {    array1[i]=array1[i]%2
    array1[i+1]+=1
  } 
}
}
array1.reverse()  
return array1
}

console.log(SumOfBinaries([1, 1, 0, 0], [0, 0, 1]).join(""))

