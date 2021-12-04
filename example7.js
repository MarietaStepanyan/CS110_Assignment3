/* Create a function that converts a given binary number into its two’scomplement negative number. This function must call the functions from
questions 5 and 6 (Inverse + 1). */

function InverseNumber(n) {
    let a = []
    for(let i = 0 ; i < n.length ; i++)
    {
      if(n[i]===[0]){
          a+=[1]
      } else {a+=[0]}
    }
    return a
  }

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

for(let i = 0; i<array1.length ; i++)
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


    function NegNumber() {
   return  NegNumber() = SumOfBinaries(InverseNumber(a), 1).join("")
}

console.log(NegNumber([1,1]))