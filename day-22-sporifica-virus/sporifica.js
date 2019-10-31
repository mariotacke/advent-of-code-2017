module.exports = (input, iterations = 10000) => {
  const map = input
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

  const directions = ['UP', 'RIGHT', 'DOWN', 'LEFT'];

  let positionX = 0;
  let positionY = 0;
  let direction = 0;

  let numberOfBurstsCausingInfections = 0;

  while (iterations-- > 0) {
    if (map.has(`${positionX},${positionY}`)) {
      // turn right
      direction = direction + 1 > directions.length - 1 ? 0 : direction + 1;

      map.delete(`${positionX},${positionY}`);
    } else {
      // turn left
      direction = direction - 1 < 0 ? directions.length - 1 : direction - 1;

      map.add(`${positionX},${positionY}`);
      numberOfBurstsCausingInfections++;
    }

    const heading = directions[direction];

    positionX += heading === 'LEFT' ? -1 : heading === 'RIGHT' ? 1 : 0;
    positionY += heading === 'UP' ? -1 : heading === 'DOWN' ? 1 : 0;
  }

  return numberOfBurstsCausingInfections;
};
