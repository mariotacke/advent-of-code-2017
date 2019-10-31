const assert = require('assert');

const fractal = require('./fractal');

describe('Day 21: Fractal Art', () => {
  it('should determine lit pixels from enhancement rules', () => {
    const enhancementRules =
      `
        ../.# => ##./#../...
        .#./..#/### => #..#/..../..../#..#
      `;

    const numberOfLitPixels = fractal(enhancementRules, 2);

    assert.equal(numberOfLitPixels, 12);
  });
});
