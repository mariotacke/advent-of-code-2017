const assert = require('assert');

const sporifica = require('./sporifica');
const sporifica2 = require('./sporifica2');

describe('Day 22: Sporifica Virus', () => {
  it('should count bursts causing infections', () => {
    const map =
      `..#
       #..
       ...`;

    const numberOfBurstsCausingInfections = sporifica(map, 70);

    assert.equal(numberOfBurstsCausingInfections, 41);
  });

  describe('Part Two', () => {
    it('should count bursts causing infections', () => {
      const map =
        `..#
         #..
         ...`;

      const numberOfBurstsCausingInfections = sporifica2(map, 100);

      assert.equal(numberOfBurstsCausingInfections, 26);
    });
  });
});
