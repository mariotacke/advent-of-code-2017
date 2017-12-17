const assert = require('assert');

const permutation = require('./permutation');

describe('Day 16: Permutation Promenade', function () {
  it('should determine order after dance sequence', () => {
    assert.equal(permutation('s1,x3/4,pe/b', 5), 'baedc');
  });
});
