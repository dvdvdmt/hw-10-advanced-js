import {MySet} from './my-set.js';

it(`stores unique values`, () => {
  const o1 = {};
  const o2 = {};
  const mySet = new MySet([
    1,
    2,
    2,
    3,
    'foo',
    'bar',
    'baz',
    'bar',
    'foo',
    o1,
    o2,
    o1,
    o2,
    o2,
  ]);
  expect(mySet.values()).toEqual([1, 2, 3, 'foo', 'bar', 'baz', o1, o2]);
});

it(`adds only values that doesn't exist in set`, () => {
  const mySet = new MySet();
  mySet.add(1);
  mySet.add(1);
  mySet.add(7);
  mySet.add(42);
  mySet.add('answer');
  mySet.add('answer');
  expect(mySet.values()).toEqual([1, 7, 42, 'answer']);
});

it(`has "keys()" method that equals to "values()"`, () => {
  const o1 = {};
  const o2 = {};
  const initial = [1, 2, 3, 'foo', 'bar', 'baz', o1, o2];
  const mySet = new MySet(initial);
  expect(mySet.keys()).toEqual(mySet.values());
});

it(`has "entries()" method`, () => {
  const o1 = {};
  const o2 = {};
  const initial = [1, 2, 3, 'foo', 'bar', 'baz', o1, o2];
  const mySet = new MySet(initial);
  expect(mySet.entries()).toEqual([
    [1, 1],
    [2, 2],
    [3, 3],
    ['foo', 'foo'],
    ['bar', 'bar'],
    ['baz', 'baz'],
    [o1, o1],
    [o2, o2],
  ]);
});

it(`implements iterator interface`, () => {
  const o1 = {};
  const o2 = {};
  const initial = [1, 2, 3, 'foo', 'bar', 'baz', o1, o2];
  const mySet = new MySet(initial);
  expect([...mySet]).toEqual(initial);
});

it(`has size`, () => {
  const initial = [1, 2, 3, 'foo', 'bar', 'baz'];
  const mySet = new MySet(initial);
  expect(mySet.size).toEqual(6);
});

it(`has "clear()" method`, () => {
  const initial = [1, 2, 3, 'foo', 'bar', 'baz'];
  const mySet = new MySet(initial);
  mySet.clear();
  expect(mySet.size).toEqual(0);
  expect(mySet.values()).toEqual([]);
});

it(`has "delete()" method`, () => {
  const o1 = {};
  const o2 = {};
  const initial = [1, 2, 3, 'foo', 'bar', 'baz', o1, o2];
  const mySet = new MySet(initial);
  mySet.delete(o1);
  mySet.delete('bar');
  mySet.delete(3);
  expect(mySet.values()).toEqual([1, 2, 'foo', 'baz', o2]);
});

it(`has "has()" method`, () => {
  const o1 = {};
  const o2 = {};
  const initial = [1, 2, 3, 'foo', 'bar', 'baz', o1, o2];
  const mySet = new MySet(initial);
  expect(mySet.has('baz')).toBeTruthy();
  expect(mySet.has(o2)).toBeTruthy();
  expect(mySet.has(3)).toBeTruthy();
});

it(`redefines "valueOf()" method which returns reference to the current set object`, () => {
  const o1 = {};
  const o2 = {};
  const initial = [1, 2, 3, 'foo', 'bar', 'baz', o1, o2];
  const mySet = new MySet(initial);
  expect(mySet === mySet.valueOf()).toBeTruthy();
});

it(`redefines "toString()" method that returns [object MySet]`, () => {
  const o1 = {};
  const o2 = {};
  const initial = [1, 2, 3, 'foo', 'bar', 'baz', o1, o2];
  const mySet = new MySet(initial);
  expect(mySet.toString()).toEqual('[object MySet]');
  expect(Object.prototype.toString.call(mySet)).toEqual('[object MySet]');
});
