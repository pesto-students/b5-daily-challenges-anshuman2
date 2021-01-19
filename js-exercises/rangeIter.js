function rangeIter(lb, ub) {
    let arr = []
    if ( typeof lb === undefined || typeof ub === undefined)
       throw new TypeError('/undefined is not a number')  
    if (typeof ub !== 'number') 
      throw new TypeError(`/${ub}` + ' is not a number/') 
    if (lb === ub)
      return [lb]
    if (lb > ub)
      return [] 
    if (lb < ub)
      {
        for (let i = lb;i <= ub;i++)
          {arr.push(i)}
        return arr    
      }         
    return {
        [Symbol.iterator](){
            let i = lb
            return {
               next(){
                 return {  
                  done: i > ub,
                  value: lb++ 
                 } 
               } 
            }
        }
    }    
}


export { rangeIter };
