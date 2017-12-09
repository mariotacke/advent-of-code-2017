const assert = require('assert');

const corruptionChecksum = require('./corruption-checksum');
const corruptionChecksum2 = require('./corruption-checksum2');

describe('Day 2: Corruption Checksum', () => {
  it('should properly calculate checksum', () => {
    const spreadsheet =
      `5 1 9 5
       7 5 3
       2 4 6 8`;

    assert.equal(18, corruptionChecksum(spreadsheet));
  });

  describe('Part Two', () => {
    it('should properly calculate second checksum', () => {
      const spreadsheet =
        `5 9 2 8
         9 4 7 3
         3 8 6 5`;

      assert.equal(9, corruptionChecksum2(spreadsheet));
    });
  });
});
