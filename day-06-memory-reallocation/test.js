const assert = require('assert');

const memoryReallocation = require('./memory-reallocation');

describe('Day 6: Memory Reallocation', () => {
  it('should properly calculate steps', () => {
    const banks = '0 2 7 0';
    
    assert.equal(5, memoryReallocation(banks));
  });
});