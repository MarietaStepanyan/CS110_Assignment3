
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
  
  console.log(InverseNumber([1,1,1,1]))