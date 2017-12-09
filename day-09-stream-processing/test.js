const assert = require('assert');

const streamProcessing = require('./stream-processing');
const streamProcessing2 = require('./stream-processing2');

describe('Day 9: Stream Processing', () => {
  it('should properly determine {} score', () => {
    assert.equal(streamProcessing('{}'), 1);
  });

  it('should properly determine {{{}}} score', () => {
    assert.equal(streamProcessing('{{{}}}'), 6);
  });

  it('should properly determine {{},{}} score', () => {
    assert.equal(streamProcessing('{{},{}}'), 5);
  });

  it('should properly determine {{{},{},{{}}}} score', () => {
    assert.equal(streamProcessing('{{{},{},{{}}}}'), 16);
  });

  it('should properly determine {<a>,<a>,<a>,<a>} score', () => {
    assert.equal(streamProcessing('{<a>,<a>,<a>,<a>}'), 1);
  });

  it('should properly determine {{<ab>},{<ab>},{<ab>},{<ab>}} score', () => {
    assert.equal(streamProcessing('{{<ab>},{<ab>},{<ab>},{<ab>}}'), 9);
  });

  it('should properly determine {{<!!>},{<!!>},{<!!>},{<!!>}} score', () => {
    assert.equal(streamProcessing('{{<!!>},{<!!>},{<!!>},{<!!>}}'), 9);
  });

  it('should properly determine {{<a!>},{<a!>},{<a!>},{<ab>}} score', () => {
    assert.equal(streamProcessing('{{<a!>},{<a!>},{<a!>},{<ab>}}'), 3);
  });

  describe('Part Two', () => {
    it('should properly determine <> characters', () => {
      assert.equal(streamProcessing2('<>'), 0);
    });

    it('should properly determine <random characters> characters', () => {
      assert.equal(streamProcessing2('<random characters>'), 17);
    });

    it('should properly determine <<<<> characters', () => {
      assert.equal(streamProcessing2('<<<<>'), 3);
    });

    it('should properly determine <{!>}> characters', () => {
      assert.equal(streamProcessing2('<{!>}>'), 2);
    });

    it('should properly determine <!!> characters', () => {
      assert.equal(streamProcessing2('<!!>'), 0);
    });

    it('should properly determine <!!!>> characters', () => {
      assert.equal(streamProcessing2('<!!!>>'), 0);
    });

    it('should properly determine <{o"i!a,<{i<a> characters', () => {
      assert.equal(streamProcessing2('<{o"i!a,<{i<a>'), 10);
    });
  });
});
