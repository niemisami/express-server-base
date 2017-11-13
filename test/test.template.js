import assert from 'assert';

// Remember to add .spec.js suffix so mocha sees the test
/* eslint-disable no-undef */
describe('Example test', () => {
  it('should assert true without done', () => {
    assert.equal(1, 1);
  });
});

describe('Example test 2', () => {
  it('should assert true with done', done => {
    Promise.resolve().then(() => {
      assert.equal(1, 1);
      done()
    });
  });
});

/* eslint-enable no-undef */
