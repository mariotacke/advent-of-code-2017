const assert = require('assert');

const defrag = require('./defrag');

describe('Day 14: Disk Defragmentation', () => {
  it('should calculate squares used', () => {
    assert.equal(defrag('flqrgnkx'), 8108);
  });
});
