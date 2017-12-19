const getNextPosition = (array, steps, position) => {
  for (let i = 0; i < steps; i++) {
    position = position + 1 >= array.length ? 0 : position + 1;
  }

  return position + 1;
};

const spinlock = (steps) => {
  let buffer = [0];
  let position = 0;

  for (let i = 1; i < 2018; i++) {
    position = getNextPosition(buffer, steps, position);

    buffer.splice(position, 0, i);
  }

  const after2017 = buffer.findIndex((x) => x === 2017) + 1;

  return buffer[after2017 === buffer.length ? 0 : after2017];
};

module.exports = spinlock;
