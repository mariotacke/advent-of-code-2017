const duelingGenerators = (a, b) => {
  const factorA = 16807;
  const factorB = 48271;
  const int = 2147483647;

  let pairs = 0;

  let previousA = a;
  let previousB = b;

  for (let i = 0; i < 40000000; i++) {
    const nextA = previousA * factorA % int;
    const nextB = previousB * factorB % int;

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
