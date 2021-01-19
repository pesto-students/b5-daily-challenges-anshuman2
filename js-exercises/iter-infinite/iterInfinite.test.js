import {count, cycle, repeat} from './iterInfinite';

describe('generator functions Test Cases', () => {
  it('returns a infinite number of elements from start', () => {
    let c = count(10 , 4)
    expect(c.next()[value])
      .toEqual(10);
    expect(c.next()[value])
      .toEqual(4);
  });
  it('returns the elements of the iterable for finite or infinite number of times', () => {
    let c = cycle('abcd' , 4)
    expect(...c)
      .toEqual('a b c d a b c d a b c d a b c d');
  });
  it('returns a value finite or infinite number of times', () => {
    let c = repeat(10 , 4)
    expect(...c)
      .toEqual('10 10 10 10');
  });
});
