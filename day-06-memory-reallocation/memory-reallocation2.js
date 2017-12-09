const memoryReallocation = (input) => {
  const banks = input.trim().split(/[\s\t/]+/).map((x) => parseInt(x));

  const patterns = {};

  let snapshot = banks.join(':');

  patterns[snapshot] = {
    lastSeen: 0,
    alreadySeen: false,
  };

  while (!(patterns[snapshot] || {}).alreadySeen) {
    let blocks = Math.max(...banks);
    let currentIndex = banks.findIndex((x) => x === blocks);

    if (!patterns[snapshot]) {
      patterns[snapshot] = {
        lastSeen: 0,
        alreadySeen: false,
      }
    }

    banks[currentIndex] = 0;
    currentIndex += 1;

    while (blocks > 0) {
      if (currentIndex === banks.length) {
        currentIndex = 0;
      }

      banks[currentIndex] += 1;
      currentIndex += 1;
      blocks -= 1;
    }

    snapshot = banks.join(':');

    if (patterns[snapshot]) {
      return patterns[snapshot].lastSeen + 1;
    }

    Object
      .keys(patterns)
      .forEach((x) => patterns[x].lastSeen += 1);
  }
};

module.exports = memoryReallocation;
