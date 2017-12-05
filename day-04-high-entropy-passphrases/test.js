const assert = require('assert');

const highEntropyPassphrases = require('./high-entropy-passphrases');
const highEntropyPassphrases2 = require('./high-entropy-passphrases2');

describe('Day 4: High-Entropy Passphrases', () => {
  it('should properly evaluate passphrases', () => {
    const passphrases = 
      `aa bb cc dd ee
       aa bb cc dd aa
       aa bb cc dd aaa`;
    
    assert.equal(2, highEntropyPassphrases(passphrases));
  });
  
  describe('Part Two', () => {
    it('should properly evaluate other passphrases', () => {
      const passphrases = 
        `abcde fghij
         abcde xyz ecdab
         a ab abc abd abf abj
         iiii oiii ooii oooi oooo
         oiii ioii iioi iiio`;
      
      assert.equal(3, highEntropyPassphrases2(passphrases));
    });
  });
});