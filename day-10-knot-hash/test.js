const assert = require('assert');

const knotHash = require('./knot-hash');

describe('Day 10: Knot Hash', () => {
  it('should properly calculate knot hash', () => {
    assert.equal(knotHash('3,4,1,5', 5), 12);
  });
});
