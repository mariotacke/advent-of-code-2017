const assert = require('assert');

const registers = require('./registers');
const registers2 = require('./registers2');

describe('Day 8: I Heard You Like Registers', () => {
  it('should properly determine largest register', () => {
    const instructions =
      `b inc 5 if a > 1
       a inc 1 if b < 5
       c dec -10 if a >= 1
       c inc -20 if c == 10`;

    assert.equal(registers(instructions), 1);
  });

  describe('Part Two', () => {
    it('should properly determine highest value', () => {
      const instructions =
        `b inc 5 if a > 1
         a inc 1 if b < 5
         c dec -10 if a >= 1
         c inc -20 if c == 10`;

      assert.equal(registers2(instructions), 10);
    });
  });
});
