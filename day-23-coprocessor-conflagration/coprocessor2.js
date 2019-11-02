function isPrime (number) {
  for (let i = 2; i < Math.ceil(number / 2); i ++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// use register b start value (first instruction, `set b <start>`)
function coprocessor (seed) {
  let start = seed;
  let stop = start;
  let output = 0;

  start = start * 100 + 100000;
  stop = start + 17000;

  do {
    if (!isPrime(start)) {
      output++;
    }

    if (start === stop) {
      break;
    }

    start += 17;
  // eslint-disable-next-line no-constant-condition
  } while (true);

  return output;
}

module.exports = coprocessor;
