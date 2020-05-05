import {makeProxyThatPreventsInFromTraversingPrototype} from './proxy-that-prevents-in-from-traversing-prototype.js';

it(`allows "in" operator to find direct property`, () => {
  const object = {foo: 'bar'};
  const proxy = makeProxyThatPreventsInFromTraversingPrototype(object);
  expect('foo' in proxy).toBeTruthy();
});

it(`prevents "in" operator from getting properties in prototype`, () => {
  const parent = {baz: 'baz'};
  const child = Object.assign(Object.create(parent), {foo: 'foo', bar: 'bar'});
  const proxy = makeProxyThatPreventsInFromTraversingPrototype(child);
  expect('baz' in child).toBeTruthy();
  expect('baz' in proxy).toBeFalsy();
});
