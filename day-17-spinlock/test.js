const assert = require('assert');

const spinlock = require('./spinlock');
const spinlock2 = require('./spinlock2');

describe('Day 17: Spinlock', () => {
  it('should identify value after 2017', () => {
    assert.equal(spinlock(3), 638);
  });

  describe('Part Two', () => {
    it('should identify value after 0', () => {
      assert.equal(spinlock2(3, 10), 9);
    });
  });
});
