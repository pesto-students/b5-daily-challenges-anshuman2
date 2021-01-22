
function map(obj , callback){
    let keys = Object.keys(obj)
    let result = {}
    for(const key of keys)
    {
      let pair = [key , obj[key]]
      let [newkey , newvalue] = callback(pair)
      result[newkey] = newvalue
    }
     return result
  }
  
  function filter(obj , callback){
    let result = {}
    let keys = Object.keys(obj)
    for(const key of keys)
    {
      let pair = [key , obj[key]]
      if(callback(pair))
       result[key] = obj[key]
    }
     return result
  }
  
  function invert(obj){
    let result = {}
    let entries = Object.entries(obj)
    for(const el of entries)
    {
      result[el[1]] = el[0]
    }
    return result
  }
  
  function merge(...obj){
    let result = {}
    for(let i = 0;i < [...obj].length;i++)
    {
      let keys = Object.keys(obj[i])
     for(const key of keys)
     {
        result[key] = obj[i][key]
     }
    }
    return result 
  }
  
  function all(obj, callback){
    let entries = Object.entries(obj)
    for(const entry of entries)
    {
      if(callback(entry[0]) === false || callback(entry[1]) === false)
       return false
    }
      return true
  }
  
  function some(obj, callback){
    let entries = Object.entries(obj)
    for(const entry of entries)
    {
      if(callback(entry[0]) === true || callback(entry[1]) === true)
        return true
    }
    return false
  }
  
  export {map, filter, invert, merge, all, some} ;