const assert = require('assert');

const packetScanner = require('./packet-scanner');

describe('Day 13: Packet Scanner', () => {
  it('should calculate trip severity', () => {
    const list = `0: 3
                  1: 2
                  4: 4
                  6: 4`;

    assert.equal(packetScanner(list), 24);
  });
});
