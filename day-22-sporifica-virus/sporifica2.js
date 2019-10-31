module.exports = (input, iterations = 10000000) => {
  const infectedNodes = input
    .split('\n')
    .map((line) => line.trim())
    .reduce((positions, row, index, array) => {
      const centerX = Math.floor(row.length / 2);
      const centerY = Math.floor(array.length / 2);

      row.split('').forEach((node, i) => {
        if (node === '#') {
          positions.add(`${i - centerX},${index - centerY}`);
        }
      });

      return positions;
    }, new Set());
  const weakenedNodes = new Set();
  const flaggedNodes = new Set();

  const directions = ['UP', 'RIGHT', 'DOWN', 'LEFT'];

  let x = 0;
  let y = 0;
  let direction = 0;

  let numberOfBurstsCausingInfections = 0;

  const isCleanNode = (x, y) => {
    return !infectedNodes.has(`${x},${y}`) &&
      !weakenedNodes.has(`${x},${y}`) &&
      !flaggedNodes.has(`${x},${y}`);
  };

  while (iterations-- > 0) {
    if (isCleanNode(x, y)) {
      // turn left
      direction = direction - 1 < 0 ? directions.length - 1 : direction - 1;

      weakenedNodes.add(`${x},${y}`);
    } else if (infectedNodes.has(`${x},${y}`)) {
      // turn right
      direction = direction + 1 > directions.length - 1 ? 0 : direction + 1;

      infectedNodes.delete(`${x},${y}`);
      flaggedNodes.add(`${x},${y}`);
    } else if (flaggedNodes.has(`${x},${y}`)) {
      direction = (direction + 2) % 4;

      flaggedNodes.delete(`${x},${y}`);
    } else {
      // weakened -> no op
      weakenedNodes.delete(`${x},${y}`);
      infectedNodes.add(`${x},${y}`);
      numberOfBurstsCausingInfections++;
    }

    const heading = directions[direction];

    x += heading === 'LEFT' ? -1 : heading === 'RIGHT' ? 1 : 0;
    y += heading === 'UP' ? -1 : heading === 'DOWN' ? 1 : 0;
  }

  return numberOfBurstsCausingInfections;
};
