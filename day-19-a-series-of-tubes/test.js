const assert = require('assert');

const tubes = require('./tubes');

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
});
