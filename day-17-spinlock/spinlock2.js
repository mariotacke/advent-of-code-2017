const getNextPosition = (iteration, steps, position) => {
  for (let i = 0; i < steps; i++) {
    position = position + 1 >= iteration ? 0 : position + 1;
  }

  return position;
};

const spinlock = (steps, iterations = 50000000) => {
  let value = undefined;
  let position = 0;

  for (let i = 1; i < iterations; i++) {
    const next = getNextPosition(i, steps, position);

    if (next === 0) {
      value = i;
    }

    position = next + 1;
  }

  return value;
};

module.exports = spinlock;
