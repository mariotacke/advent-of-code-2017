const assert = require('assert');

const sporifica = require('./sporifica');

describe('Day 22: Sporifica Virus', () => {
  it('should count bursts causing infections', () => {
    const map =
      `..#
       #..
       ...`;

    const numberOfBurstsCausingInfections = sporifica(map, 70);

    assert.equal(numberOfBurstsCausingInfections, 41);
  });
});
