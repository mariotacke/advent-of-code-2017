const knotHash = require('../day-10-knot-hash/knot-hash2');

const defrag = (input) => {
  return Array
    .from({ length: 128 }, (x, index) => index)
    .map((x) => knotHash(`${input}-${x}`)
      .split('')
      .map((digit) => `${parseInt(digit, 16).toString(2)}`.padStart(4, '0'))
      .join('')
      .split('')
      .map((bit) => bit !== '0')
    )
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue.filter((x) => x).length;
    }, 0);
};

module.exports = defrag;
