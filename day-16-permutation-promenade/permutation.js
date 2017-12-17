const permutation = (moves, length = 16) => {
  const line = Array
    .from({ length }, (_, i) => i)
    .map((x) => String.fromCharCode(97 + x));

  const dance = moves.split(',').map((x) => {
    if (x[0] === 's') {
      return {
        type: 'spin',
        size: parseInt(x.slice(1, x.length)),
      };
    } else if (x[0] === 'x') {
      const parts = x.slice(1).split('/');

      return {
        type: 'exchange',
        indexA: parseInt(parts[0]),
        indexB: parseInt(parts[1]),
      };
    } else if (x[0] === 'p') {
      return {
        type: 'partner',
        partnerA: x[1],
        partnerB: x[3],
      };
    }
  });

  const swap = (array, indexA, indexB) => {
    const temp = array[indexA];

    array[indexA] = array[indexB];
    array[indexB] = temp;
  };

  for (let i = 0; i < dance.length; i++) {
    const move = dance[i];

    if (move.type === 'spin') {
      for (let j = 0; j < move.size; j++) {
        line.unshift(line.pop());
      }
    } else if (move.type === 'exchange') {
      swap(line, move.indexA, move.indexB);
    } else if (move.type === 'partner') {
      const indexA = line.findIndex((x) => x === move.partnerA);
      const indexB = line.findIndex((x) => x === move.partnerB);

      swap(line, indexA, indexB);
    }
  }

  return line.join('');
};

module.exports = permutation;
