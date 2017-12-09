const assert = require('assert');

const memoryReallocation = require('./memory-reallocation');
const memoryReallocation2 = require('./memory-reallocation2');

describe('Day 6: Memory Reallocation', () => {
  it('should properly calculate steps', () => {
    const banks = '0 2 7 0';

    assert.equal(memoryReallocation(banks), 5);
  });

  describe('Part Two', () => {
    it('should properly calculate steps', () => {
      const banks = '0 2 7 0';

      assert.equal(memoryReallocation2(banks), 4);
    });
  });
});
