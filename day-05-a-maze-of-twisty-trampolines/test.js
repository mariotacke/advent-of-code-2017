const assert = require('assert');

const twistyTrampolines = require('./twisty-trampolines');
const twistyTrampolines2 = require('./twisty-trampolines2');

describe('Day 5: A Maze of Twisty Trampolines, All Alike', () => {
  it('should properly calculate steps', () => {
    const offsets = 
      `0
       3
       0
       1
      -3`;
    
    assert.equal(5, twistyTrampolines(offsets));
  });
  
  describe('Part Two', () => {
    it('should properly calculate other steps', () => {
      const offsets = 
        `0
         3
         0
         1
        -3`;
      
      assert.equal(10, twistyTrampolines2(offsets));
    });
  });
});