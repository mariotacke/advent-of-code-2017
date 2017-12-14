const hexEd = (input) => {
  const instructions = input.split(',');
  const position = { x: 0, y: 0 };

  let farthestSteps = 0;
  let steps = 0;

  instructions.forEach((instruction) => {
    switch (instruction) {
      case 'n':
        position.y -= 1;
        break;
      case 'ne':
        position.x += 1;
        position.y -= 1;
        break;
      case 'se':
        position.x += 1;
        break;
      case 's':
        position.y += 1;
        break;
      case 'sw':
        position.x -= 1;
        position.y += 1;
        break;
      case 'nw':
        position.x -= 1;
        break;
    }

    steps = (
      Math.abs(position.x) +
      Math.abs(-position.x - position.y) +
      Math.abs(position.y)
    ) / 2;

    if (steps > farthestSteps) {
      farthestSteps = steps;
    }
  });

  return farthestSteps;
};

module.exports = hexEd;
