function deep(value){
    if (typeof value !== 'object' || value === null) {
      return value
    }
    if (Array.isArray(value)) {
      return deepCopyArray(value)
    }
    return deepCopyObject(value)
   }

function deepCopyArray(value) {
    return value.map((item) => {
      return deep(item)
    })
   }   

const deepCopyObject = (objToCopy , copyDescriptors = true) => {
        if(typeof objToCopy !=='object' || objToCopy === null)
          return objToCopy
        const result = {}
        if(!copyDescriptors){
          Object.keys(objToCopy).forEach((key) => {
            const value = objToCopy[key]
            result[key] = deep(value)
        })}
        else{
          Object.getOwnPropertyNames(objToCopy).forEach((key) => {
            const value = objToCopy[key]
            result[key] = deep(value)  
          })  
        }
        return result
       }

    

export { deepCopyObject };
