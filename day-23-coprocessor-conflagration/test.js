const assert = require('assert');

const coprocessor = require('./coprocessor');
const coprocessor2 = require('./coprocessor2');

describe('Day 23: Coprocessor Conflagration', () => {
  it('should count multiplications', () => {
    const instructions =
      `set b 81
       set c b
       jnz a 2
       jnz 1 5
       mul b 100
       sub b -100000
       set c b
       sub c -17000
       set f 1
       set d 2
       set e 2
       set g d
       mul g e
       sub g b
       jnz g 2
       set f 0
       sub e -1
       set g e
       sub g b
       jnz g -8
       sub d -1
       set g d
       sub g b
       jnz g -13
       jnz f 2
       sub h -1
       set g b
       sub g c
       jnz g 2
       jnz 1 3
       sub b -17
       jnz 1 -23`;

    const numberOfMultiplications = coprocessor(instructions);

    assert.equal(numberOfMultiplications, 6241);
  });

  describe('Part Two', () => {
    it('should compute register h', () => {
      const seed = 81; // first set instruction value for register b
      const value = coprocessor2(seed);

      assert.equal(value, 909);
    });
  });
});
