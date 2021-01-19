function addBigIntegers(numericString) {
   let arrNumString = numericString.split('\n')
   //console.log(arrNumString)
   let maxString = arrNumString.map(a => a.length)
   //console.log(maxString)
   let maxLength = Math.max(...maxString) 
   //console.log(maxLength)
   let collection = []
   for(let i = 0; i < arrNumString.length;i++){
      let str = '' 
    for(let j = 0;j < maxLength - arrNumString[i].length;j++)
    {
       str += '0' 
    } 
     collection.push(str + arrNumString[i])
   }
     //console.log(collection)
     let sumDigits = []
     for(let i = 0;i < collection[0].length;i++)
     {
        let sum = 0
        for(let j = 0;j < collection.length;j++)
        {
          sum += parseInt(collection[j][i])  
        } 
        sumDigits.push(sum)
     }
     sumDigits.reverse()
     let reversed = sumDigits
     let carry = 0 
     let newReversed = []
     let sum 
     for(let i = 0;i < reversed.length;i++)
     {
        sum = reversed[i] + carry 
        newReversed.push(sum % 10)
        carry = parseInt(sum/10)  
     }
       if(carry !== 0)
         newReversed.push(carry)

        return newReversed.reverse().join('')
  }


 export { addBigIntegers };
