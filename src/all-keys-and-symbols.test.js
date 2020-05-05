import {allKeysAndSymbols} from './all-keys-and-symbols.js';

it(`returns empty array on falsy input`, () => {
  expect(allKeysAndSymbols(null)).toHaveLength(0);
});

it(`returns empty array on object with empty prototype`, () => {
  expect(allKeysAndSymbols(Object.create(null))).toHaveLength(0);
});

it(`returns properties of child and parent`, () => {
  const parent = Object.create(null);
  parent.baz = 'baz';
  parent[Symbol('baz-symbol')] = 'baz-symbol';
  const child = Object.create(parent);
  child.foo = 'foo';
  child[Symbol('foo-symbol')] = 'foo-symbol';
  child.bar = 'bar';
  const result = allKeysAndSymbols(child);
  expect(result).toHaveLength(5);
  expect(result).toEqual([
    'foo',
    'bar',
    'Symbol(foo-symbol)',
    'baz',
    'Symbol(baz-symbol)',
  ]);
});
