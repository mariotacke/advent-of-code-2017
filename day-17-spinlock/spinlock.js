const getNextPosition = (array, steps, position) => {
  for (let i = 0; i < steps; i++) {
    position = position + 1 >= array.length ? 0 : position + 1;
  }

  return position + 1;
};

const spinlock = (steps, iterations = 2017, lookupValue = 2017) => {
  let buffer = [0];
  let position = 0;

  for (let i = 1; i <= iterations; i++) {
    position = getNextPosition(buffer, steps, position);

    buffer.splice(position, 0, i);
  }

  const afterRun = buffer.findIndex((x) => x === lookupValue) + 1;

  return buffer[afterRun === buffer.length ? 0 : afterRun];
};

module.exports = spinlock;
