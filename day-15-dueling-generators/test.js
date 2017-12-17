const assert = require('assert');

const duelingGenerators = require('./dueling-generators');
const duelingGenerators2 = require('./dueling-generators2');

// tests are skipped because they can be very resource intensive
describe('Day 15: Dueling Generators', function () {
  this.timeout(0);

  it.skip('should calculate number of pairs', () => {
    assert.equal(duelingGenerators(65, 8921), 588);
  });

  describe('Part Two', () => {
    it.skip('should calculate number of pairs', () => {
      assert.equal(duelingGenerators2(65, 8921), 309);
    });
  });
});
