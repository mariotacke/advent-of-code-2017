const assert = require('assert');

const bridge = require('./bridge');

describe('Day 24: Electromagnetic Moat', () => {
  it('should determine strength of strongest bridge', () => {
    const components =
     `0/2
      2/2
      2/3
      3/4
      3/5
      0/1
      10/1
      9/10`;

    const strength = bridge(components);

    assert.equal(strength, 31);
  });
});
