const allPromises = arr => {
    let isResolved
    let rejectedmsg 
    let resolvedarr = []
    for (const el of arr)
    {
       isResolved = true
       el.then(val => {
          resolvedarr.push(val)
       }).catch(err => {
          isResolved = false
          rejectedmsg = err
       }) 
       if(isResolved === false)
       {
         break
       }
    }
     return new Promise((resolve, reject) => {
        if(resolvedarr.length === arr.length)
         resolve(resolvedarr)
        else 
         reject(rejectedmsg)
         
     })
 };
 
 export { allPromises };