const assert = require('assert');

const hexEd = require('./hex-ed');

describe('Day 11: Hex Ed', () => {
  it('should properly calculate "ne,ne,ne" steps', () => {
    assert.equal(hexEd('ne,ne,ne'), 3);
  });

  it('should properly calculate "ne,ne,sw,sw" steps', () => {
    assert.equal(hexEd('ne,ne,sw,sw'), 0);
  });

  it('should properly calculate "ne,ne,s,s" steps', () => {
    assert.equal(hexEd('ne,ne,s,s'), 2);
  });

  it('should properly calculate "se,sw,se,sw,sw" steps', () => {
    assert.equal(hexEd('se,sw,se,sw,sw'), 3);
  });
});
