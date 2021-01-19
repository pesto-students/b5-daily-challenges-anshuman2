function* count(start , step = 1){
  let n = start
  while(true)
  {
    yield n
    n = n + step
  }
}

function* cycle(iter , n){
  let iterable = iter
  if(n === undefined)
  {
    while(true)
   { 
    for(const el of iterable)
    {
      yield el
    }
     iterable = iter
   } 
  }
  else{
    for(let i = 0;i < n;i++)
    {
     for(const el of iterable)
    {
      yield el
    }
     iterable = iter
    }
  }
}


function* repeat(value , n){
  if(n === undefined){
    while(true)
    {
      yield value
    }
  }
  else{
    while(n--)
    {
      yield value
    }
  }
}


export {
  count,
  cycle,
  repeat
};
