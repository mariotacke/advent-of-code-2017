const assert = require('assert');

const knotHash = require('./knot-hash');
const knotHash2 = require('./knot-hash2');

describe('Day 10: Knot Hash', () => {
  it('should properly calculate knot hash', () => {
    assert.equal(knotHash('3,4,1,5', 5), 12);
  });

  describe('Part Two', () => {
    it('should calculate "" hash', () => {
      assert.equal(knotHash2(''), 'a2582a3a0e66e6e86e3812dcb672a272');
    });

    it('should calculate "AoC 2017" hash', () => {
      assert.equal(knotHash2('AoC 2017'), '33efeb34ea91902bb2f59c9920caa6cd');
    });

    it('should calculate "1,2,3" hash', () => {
      assert.equal(knotHash2('1,2,3'), '3efbe78a8d82f29979031a4aa0b16a9d');
    });

    it('should calculate "1,2,4" hash', () => {
      assert.equal(knotHash2('1,2,4'), '63960835bcdc130f0b66d7ff4f6a5a8e');
    });
  });
});
