export function asyncExecutor(generator) {
  if (
    typeof generator !== 'function' ||
    generator.constructor.name !== 'GeneratorFunction'
  ) {
    return;
  }
  const iterator = generator();
  processNext();

  function processNext(value) {
    const next = iterator.next(value);
    if (!next.done) {
      Promise.resolve(next.value).then(processNext);
    }
  }
}
