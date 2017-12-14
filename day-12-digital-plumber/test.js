const assert = require('assert');

const digitalPlumber = require('./digital-plumber');

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
});
