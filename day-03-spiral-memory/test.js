const assert = require('assert');

const spiralMemory = require('./spiral-memory');
const spiralMemory2 = require('./spiral-memory2');

describe('Day 3: Spiral Memory', () => {
  it('should properly calculate 1', () => {
    assert.equal(0, spiralMemory(1));
  });

  it('should properly calculate 12', () => {
    assert.equal(3, spiralMemory(12));
  });

  it('should properly calculate 23', () => {
    assert.equal(2, spiralMemory(23));
  });

  it('should properly calculate 1024', () => {
    assert.equal(31, spiralMemory(1024));
  });

  describe('Part Two', () => {
    it('should properly calculate 10', () => {
      assert.equal(11, spiralMemory2(10));
    });

    it('should properly calculate 59', () => {
      assert.equal(122, spiralMemory2(59));
    });
  });
});
