const spinlock = (steps, iterations = 50000000) => {
  let value = undefined;
  let position = 0;

  for (let i = 1; i < iterations; i++) {
    const next = (position + steps) % i;

    if (next === 0) {
      value = i;
    }

    position = next + 1;
  }

  return value;
};

module.exports = spinlock;
