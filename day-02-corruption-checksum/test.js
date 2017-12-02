const assert = require('assert');

const corruptionChecksum = require('./corruption-checksum');

describe('Day 2: Corruption Checksum', () => {
  it('should properly calculate checksum', () => {
    const spreadsheet = 
      `5 1 9 5
       7 5 3
       2 4 6 8`;
    
    assert.equal(18, corruptionChecksum(spreadsheet));
  });
});