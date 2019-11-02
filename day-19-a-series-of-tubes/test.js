const assert = require('assert');

const tubes = require('./tubes');
const tubes2 = require('./tubes2');

describe('Day 19: A Series of Tubes', () => {
  it('should calculate tube path', () => {
    const instructions =
      `
      |
      |  +--+
      A  |  C
  F---|----E|--+
      |  |  |  D
      +B-+  +--+
      `;

    const path = tubes(instructions);

    assert.equal(path, 'ABCDEF');
  });

  describe('Part Two', () => {
    it('should calculate tube path', () => {
      const instructions =
        `
        |
        |  +--+
        A  |  C
    F---|----E|--+
        |  |  |  D
        +B-+  +--+
        `;

      const steps = tubes2(instructions);

      assert.equal(steps, 38);
    });
  });
});
