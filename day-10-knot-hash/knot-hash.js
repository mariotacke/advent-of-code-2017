const knotHash = (input, size = 256) => {
  let currentPosition = 0;
  let skipSize = 0;

  const lengths = input.split(',').map((x) => parseInt(x));
  const list = Array.from(new Array(size), (x, i) => i);

  for (let i = 0; i < lengths.length; i++) {
    const length = lengths[i];

    let sublist = list.slice(currentPosition, currentPosition + length);

    if (currentPosition + length > size) {
      const overlap = list.slice(0, (currentPosition + length) % size);

      sublist = sublist.concat(overlap);
    }

    sublist.reverse();

    for (let j = 0; j < sublist.length; j++) {
      list[(currentPosition + j) % size] = sublist[j];
    }

    currentPosition = (currentPosition + length + skipSize) % size;
    skipSize++;
  }

  return list[0] * list[1];
};

module.exports = knotHash;
