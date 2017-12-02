const assert = require('assert');

const inverseCaptcha = require('./inverse-captcha');

describe('Inverse Captcha', () => {
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
});