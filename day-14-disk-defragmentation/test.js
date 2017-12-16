const assert = require('assert');

const defrag = require('./defrag');
const defrag2 = require('./defrag2');

describe('Day 14: Disk Defragmentation', () => {
  it('should calculate squares used', () => {
    assert.equal(defrag('flqrgnkx'), 8108);
  });

  describe('Part Two', () => {
    it('should calculate regions', () => {
      assert.equal(defrag2('flqrgnkx'), 1242);
    });
  });
});
