const twistyTrampolines = (input) => {
  const array = input
    .split('\n')
    .map((x) => parseInt(x));

  let currentIndex = 0;
  let totalSteps = 0;

  while (currentIndex < array.length) {
    const steps = array[currentIndex];

    array[currentIndex] += steps >= 3 ? -1 : 1;
    totalSteps += 1;

    currentIndex += steps;
  }

  return totalSteps;
};

module.exports = twistyTrampolines;
