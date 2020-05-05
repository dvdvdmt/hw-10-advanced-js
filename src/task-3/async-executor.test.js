import {asyncExecutor} from './async-executor.js';

it(`iterates until the end`, (done) => {
  asyncExecutor(function* () {
    yield 1;
    yield 2;
    yield 3;
    done();
  });
});

it(`resolves yielded promises and passes their values back to generator`, (done) => {
  const timeout = (callback, delayMs = 200) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(callback());
      }, delayMs);
    });

  asyncExecutor(function* () {
    let answer = '';
    answer += yield timeout(() => 'The answer to life ');
    answer += yield timeout(() => 'the universe and everything is ');
    answer += yield timeout(() => 42);
    expect(answer).toEqual(
      'The answer to life the universe and everything is 42'
    );
    done();
  });
});
