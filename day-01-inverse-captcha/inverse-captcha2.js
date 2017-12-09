const inverseCaptcha = (input) => {
  return input
    .split('')
    .map((x) => parseInt(x))
    .reduce((accumulator, currentValue, currentIndex, array) => {
      const half = array.length / 2;

      if (currentIndex + half <= array.length - 1) {
        if (currentValue === array[currentIndex + half]) {
          return accumulator + currentValue;
        }
      } else {
        const skip = currentIndex + half - array.length;

        if (currentValue === array[skip]) {
          return accumulator + currentValue;
        }
      }

      return accumulator;
    }, 0);
};

module.exports = inverseCaptcha;
