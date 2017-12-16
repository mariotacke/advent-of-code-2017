const knotHash = require('../day-10-knot-hash/knot-hash2');

const defrag = (input) => {
  const grid = Array
    .from({ length: 128 }, (x, index) => index)
    .map((x) => knotHash(`${input}-${x}`)
      .split('')
      .map((digit) => `${parseInt(digit, 16).toString(2)}`.padStart(4, '0'))
      .join('')
      .split('')
      .map((bit) => bit !== '0')
    );

  const clusters = [];

  const traverse = (array, { x, y }, set) => {
    if (x < 0 || x === 128 || y < 0 || y === 128 || set.has(`${x},${y}`)) {
      return set;
    }

    if (!array[y][x]) {
      return set;
    }

    set.add(`${x},${y}`);

    return new Set([
      ...traverse(array, { x: x - 1, y }, set),
      ...traverse(array, { x, y: y - 1 }, set),
      ...traverse(array, { x: x + 1, y }, set),
      ...traverse(array, { x, y: y + 1 }, set),
    ]);
  };

  for (let y = 0; y < 128; y++) {
    for (let x = 0; x < 128; x++) {
      const existingRegion = clusters.find((r) => r && r.has(`${x},${y}`));

      if (grid[y] && grid[y][x] && !existingRegion) {
        const region = traverse(grid, { x, y }, new Set());

        clusters.push(region);
      }
    }
  }

  return clusters.length;
};

module.exports = defrag;
