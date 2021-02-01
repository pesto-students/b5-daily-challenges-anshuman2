const curry = (fn) => {
    return function curried(...args) {
      const done = args.length >= fn.length
      if (done) {
        return fn.apply(this, args)
      } else {
        return (...args2) => curried.apply(this, [...args, ...args2])
      }
    }
  }
  
  export {
    curry,
  };