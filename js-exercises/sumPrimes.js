function sumPrimes(n) {
   let sum = 2,flag
   if (n === 0 || n === 1)
     return n
   if (n === 2)
     return 3  
   for(let i = 3;i <= n;i++)
   {
     flag = true
     for(let j = 2;j < i;j++)
     {
        if(i % j === 0)
         {
           flag = false
           break
         } 
     }
       if(flag === true)
       {
         sum += i
       }
   }
     return sum
}

export {
  sumPrimes,
};
