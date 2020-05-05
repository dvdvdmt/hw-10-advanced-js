export function makeProxyThatPreventsInFromTraversingPrototype(target) {
  return new Proxy(target, {
    has(target, key) {
      const isDirectProperty = Object.getOwnPropertyDescriptor(target, key);
      return isDirectProperty;
    },
  });
}
