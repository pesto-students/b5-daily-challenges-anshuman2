
function duplicateLetters(str) {
   str = str.split('')
   let arr = str.sort()
   let max = 1
   for(let i = 0;i < arr.length;i++)
   {
     let count = 1
     for(let j = i+1;j < arr.length ;j++)
     {
       if(arr[i] === arr[j])
         count++
     }
      
      if(count > max)
        max = count
   }
     if(max === 1)
       return false
     else
       return max  
}

export {
  duplicateLetters,
};


