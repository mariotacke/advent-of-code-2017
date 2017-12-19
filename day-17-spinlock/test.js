const assert = require('assert');

const spinlock = require('./spinlock');

describe('Day 17: Spinlock', () => {
  it('should identify value after 2017', () => {
    assert.equal(spinlock(3), 638);
  });
});
