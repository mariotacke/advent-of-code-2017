const knotHash = (input, size = 256) => {
  let currentPosition = 0;
  let skipSize = 0;

  const lengths = input
    .split('')
    .map((x) => x.charCodeAt(0))
    .concat([17, 31, 73, 47, 23]);

  const sparseHash = Array.from(new Array(size), (x, i) => i);

  for (let r = 0; r < 64; r++) {
    for (let i = 0; i < lengths.length; i++) {
      const length = lengths[i];

      let sublist = sparseHash.slice(currentPosition, currentPosition + length);

      if (currentPosition + length > size) {
        const overlap = sparseHash.slice(0, (currentPosition + length) % size);

        sublist = sublist.concat(overlap);
      }

      sublist.reverse();

      for (let j = 0; j < sublist.length; j++) {
        sparseHash[(currentPosition + j) % size] = sublist[j];
      }

      currentPosition = (currentPosition + length + skipSize) % size;
      skipSize++;
    }
  }

  let number = 0;

  const denseHash = [];

  for (let i = 0; i < sparseHash.length; i += 16) {
    for (let j = 0; j < 16; j++) {
      number = number ^ sparseHash[i + j];
    }

    denseHash.push(number);
    number = 0;
  }

  return denseHash.map((x) => x.toString(16).padStart(2, '0')).join('');
};

module.exports = knotHash;
