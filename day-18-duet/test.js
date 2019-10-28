const assert = require('assert');

const duet = require('./duet');
const duet2 = require('./duet2');

describe('Day 18: Duet', () => {
  it('should calculate recovered frequency', () => {
    const instructions =
     `set a 1
      add a 2
      mul a a
      mod a 5
      snd a
      set a 0
      rcv a
      jgz a -1
      set a 1
      jgz a -2`;

    assert.equal(duet(instructions), 4);
  });

  describe('Part Two', () => {
    it('should count how many times program 1 sent', () => {
      const instructions =
       `snd 1
        snd 2
        snd p
        rcv a
        rcv b
        rcv c
        rcv d`;

      assert.equal(duet2(instructions), 3);
    });
  });
});
