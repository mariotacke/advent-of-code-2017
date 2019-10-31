const rotate = (grid) => {
  const rotatedGrid = [];

  for (let x = 0; x < grid.length; x++) {
    const row = [];

    for (let y = grid.length - 1; y >= 0; y--) {
      row.push(grid[y][x]);
    }

    rotatedGrid.push(row);
  }

  return rotatedGrid;
};

const flip = (grid) => {
  const flippedGrid = [];

  for (let y = 0; y < grid.length; y++) {
    const row = [];

    for (let x = grid.length - 1; x >= 0; x--) {
      row.push(grid[y][x]);
    }

    flippedGrid.push(row);
  }

  return flippedGrid;
};

const sequence = (grid) => {
  return grid.map((row) => row.join('')).join('/');
};

const split = (grid, size) => {
  const splitGrids = [];

  for (let y = 0; y < grid.length; y += size) {
    const row = [];

    for (let x = 0; x < grid.length; x += size) {
      const section = Array.from({ length: size }).map((_, i) => {
        return grid[y + i].slice(x, x + size);
      });

      row.push(section);
    }

    splitGrids.push(row);
  }

  return splitGrids;
};

const getRotatedAndFlippedVariations = (originalGrid) => {
  const variations = new Set();

  let grid = originalGrid.map((row) => row.map((column) => column));

  Array.from({ length: 4 }).forEach(() => {
    grid = rotate(grid);

    variations.add(sequence(grid));
    variations.add(sequence(flip(grid)));
  });

  return variations;
};

const enhance = (grid, rules) => {
  const variations = getRotatedAndFlippedVariations(grid);

  const rule = rules.find((rule) => variations.has(rule.match(/(.*) => /)[1]));

  const enhancedGrid = rule
    .match(/=> (.*)/)[1]
    .split('/')
    .map((row) => row.split(''));

  return enhancedGrid;
};

const join = (splitGrids) => {
  const gridLength = splitGrids[0][0].length;
  const newLength = splitGrids.length * splitGrids[0][0].length;
  const joinedGrid = Array
    .from({ length: newLength })
    .map(() => Array.from({ length: newLength }));

  for (let y = 0; y < splitGrids.length; y++) {
    for (let x = 0; x < splitGrids.length; x++) {
      for (let y0 = 0; y0 < gridLength; y0++) {
        for (let x0 = 0; x0 < gridLength; x0++) {
          joinedGrid[y * gridLength + y0][x * gridLength + x0] = splitGrids[y][x][y0][x0];
        }
      }
    }
  }

  return joinedGrid;
};

module.exports = (input, iterations = 5) => {
  const rules = input
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length);

  let grid = [
    ['.', '#', '.'],
    ['.', '.', '#'],
    ['#', '#', '#'],
  ];

  while (iterations-- > 0) {
    const splitGrids = split(grid, grid.length % 2 === 0 ? 2 : 3);

    for (let y = 0; y < splitGrids.length; y++) {
      for (let x = 0; x < splitGrids.length; x++) {
        const existingGrid = splitGrids[y][x];
        const enhancedGrid = enhance(existingGrid, rules);

        splitGrids[y][x] = enhancedGrid;
      }
    }

    grid = join(splitGrids);
  }

  return grid
    .map((row) => row.join(''))
    .join('')
    .split('')
    .filter((x) => x === '#')
    .length;
};
