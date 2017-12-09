const assert = require('assert');

const recursiveCircus = require('./recursive-circus');
const recursiveCircus2 = require('./recursive-circus2');

describe('Day 7: Recursive Circus', () => {
  it('should properly determine bottom program', () => {
    const instructions =
      `pbga (66)
       xhth (57)
       ebii (61)
       havc (66)
       ktlj (57)
       fwft (72) -> ktlj, cntj, xhth
       qoyq (66)
       padx (45) -> pbga, havc, qoyq
       tknk (41) -> ugml, padx, fwft
       jptl (61)
       ugml (68) -> gyxo, ebii, jptl
       gyxo (61)
       cntj (57)`;

    assert.equal(recursiveCircus(instructions), 'tknk');
  });

  describe('Part Two', () => {
    it('should properly determine proper weight to balance', () => {
      const instructions =
        `pbga (66)
         xhth (57)
         ebii (61)
         havc (66)
         ktlj (57)
         fwft (72) -> ktlj, cntj, xhth
         qoyq (66)
         padx (45) -> pbga, havc, qoyq
         tknk (41) -> ugml, padx, fwft
         jptl (61)
         ugml (68) -> gyxo, ebii, jptl
         gyxo (61)
         cntj (57)`;

      assert.equal(recursiveCircus2(instructions), 60);
    });
  });
});
