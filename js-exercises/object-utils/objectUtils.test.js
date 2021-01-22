import { map, filter, invert, merge, all, some } from './objectUtils';

describe('object utils Test Cases', () => {
  it('map transforms the key value pair according to the callback', () => {
    const func = ([key, val]) => {
        key = key.toUpperCase()
        val = val * 10
        return [key, val]
    } 
    let obj = {'a':1, 'b':2, 'c':3} 
    expect(map(obj, func)).toEqual({'A':10, 'B':20, 'C':30});
  });
  it('it filters on the basis of keys or values', () => {
    const func = ([key, val]) => {
        return key === val
    } 
    let obj = {'a':1, 'b':'b', 'c':'c'} 
    expect(filter(obj, func)).toEqual({'b':'b', 'c':'c'});
  });
  it('it inverts the key value pairs', () => {
    let obj = {'a':1, 'b':2, 'c':3} 
    expect(invert(obj)).toEqual({1:'a', 2:'b', 3:'c'});
  });
  it('it merges n number of objects into single object', () => {
  let obj1 = {'a':1, 'b':2, 'c':3}
  let obj2 = {'d':1, 'e':4, 'f':5}
  expect(merge(obj1, obj2)).toEqual({'a':1, 'b':2, 'c':3, 'd':1, 'e':4, 'f':5});
  })
  it('if all the keys and values satisfies the callback then it returns true', () => {
    let obj = {'a':1, 'b':2, 'c':3}
    const func = val => val !== undefined
    expect(all(obj, func)).toEqual(true);
  })
  it('if any one of the keys or values satisfies the callback then it returns true', () => {
    let obj = {'a':1, 'b':2, 'c':3}
    const func = val => val === 1
    expect(some(obj ,func)).toEqual(true);
  })
});
