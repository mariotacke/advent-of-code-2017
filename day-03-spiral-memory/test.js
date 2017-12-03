const assert = require('assert');

const spiralMemory = require('./spiral-memory');

describe('Day 3: Spiral Memory', () => {
  it('should properly calculate 1', () => {  
    assert.equal(0, spiralMemory(1));
  });
  
  it('should properly calculate 12', () => {  
    assert.equal(3, spiralMemory(12));
  });
  
  it('should properly calculate 23', () => {  
    assert.equal(2, spiralMemory(23));
  });
  
  it('should properly calculate 1024', () => {  
    assert.equal(31, spiralMemory(1024));
  });
});