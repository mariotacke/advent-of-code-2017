const assert = require('assert');

const packetScanner = require('./packet-scanner');
const packetScanner2 = require('./packet-scanner2');

describe('Day 13: Packet Scanner', () => {
  it('should calculate trip severity', () => {
    const list = `0: 3
                  1: 2
                  4: 4
                  6: 4`;

    assert.equal(packetScanner(list), 24);
  });

  describe('Part Two', () => {
    it('should calculate picosecond delay to safely pass through', () => {
      const list = `0: 3
                    1: 2
                    4: 4
                    6: 4`;

      assert.equal(packetScanner2(list), 10);
    });
  });
});
