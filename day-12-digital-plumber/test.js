const assert = require('assert');

const digitalPlumber = require('./digital-plumber');
const digitalPlumber2 = require('./digital-plumber2');

describe('Day 12: Digital Plumber', () => {
  it('should count connected pipes to 0', () => {
    const list =
      `0 <-> 2
       1 <-> 1
       2 <-> 0, 3, 4
       3 <-> 2, 4
       4 <-> 2, 3, 6
       5 <-> 6
       6 <-> 4, 5`;

    assert.equal(digitalPlumber(list), 6);
  });

  describe('Part Two', () => {
    it('should count groups', () => {
      const list =
        `0 <-> 2
         1 <-> 1
         2 <-> 0, 3, 4
         3 <-> 2, 4
         4 <-> 2, 3, 6
         5 <-> 6
         6 <-> 4, 5`;

      assert.equal(digitalPlumber2(list), 2);
    });
  });
});
