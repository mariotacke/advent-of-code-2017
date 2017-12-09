const assert = require('assert');

const inverseCaptcha = require('./inverse-captcha');
const inverseCaptcha2 = require('./inverse-captcha2');

describe('Day 1: Inverse Captcha', () => {
  it('should properly calculate 1122', () => {
    assert.equal(3, inverseCaptcha('1122'));
  });

  it('should properly calculate 1111', () => {
    assert.equal(4, inverseCaptcha('1111'));
  });

  it('should properly calculate 1234', () => {
    assert.equal(0, inverseCaptcha('1234'));
  });

  it('should properly calculate 91212129', () => {
    assert.equal(9, inverseCaptcha('91212129'));
  });

  describe('Part Two', () => {
    it('should properly calculate 1212', () => {
      assert.equal(6, inverseCaptcha2('1212'));
    });

    it('should properly calculate 1221', () => {
      assert.equal(0, inverseCaptcha2('1221'));
    });

    it('should properly calculate 123425', () => {
      assert.equal(4, inverseCaptcha2('123425'));
    });

    it('should properly calculate 123123', () => {
      assert.equal(12, inverseCaptcha2('123123'));
    });

    it('should properly calculate 12131415', () => {
      assert.equal(4, inverseCaptcha2('12131415'));
    });
  });
});
