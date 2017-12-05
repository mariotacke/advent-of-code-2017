const assert = require('assert');

const highEntropyPassphrases = require('./high-entropy-passphrases');

describe('Day 4: High-Entropy Passphrases', () => {
  it('should properly evaluate passphrases', () => {
    const passphrases = 
      `aa bb cc dd ee
       aa bb cc dd aa
       aa bb cc dd aaa`;
    
    assert.equal(2, highEntropyPassphrases(passphrases));
  });
});