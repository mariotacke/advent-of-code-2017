const duelingGenerators = (a, b) => {
  const factorA = 16807;
  const factorB = 48271;
  const int = 2147483647;

  let pairs = 0;

  let previousA = a;
  let previousB = b;

  const generate = (seed, factor, mod) => {
    let previous = seed;

    do {
      previous = previous * factor % int;
    } while (previous % mod !== 0);

    return previous;
  };

  for (let i = 0; i < 5000000; i++) {
    const nextA = generate(previousA, factorA, 4);
    const nextB = generate(previousB, factorB, 8);

    const binaryA = nextA.toString(2).padStart(32, '0').substring(16, 32);
    const binaryB = nextB.toString(2).padStart(32, '0').substring(16, 32);

    if (binaryA === binaryB) {
      pairs += 1;
    }

    previousA = nextA;
    previousB = nextB;
  }

  return pairs;
};

module.exports = duelingGenerators;
