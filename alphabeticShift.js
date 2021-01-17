const alphabeticShift = str => {
   let upperCaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
   let lowerCaseString = 'abcdefghijklmnopqrstuvwxyz'
   let result = ''
   for(let i = 0;i < str.length;i++)
   {
     if(upperCaseString.indexOf(str[i]) !== -1)
       result += upperCaseString[upperCaseString.indexOf(str[i]) + 1] 
     else
       result += lowerCaseString[lowerCaseString.indexOf(str[i]) + 1]    
   }

   return result
};

export { alphabeticShift };
