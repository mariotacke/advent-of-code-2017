const inverseCaptcha = (input) => {
  return input
    .split('')
    .map((x) => parseInt(x))
    .reduce((accumulator, currentValue, currentIndex, array) => {
      if (currentIndex < array.length - 1) {
        if (currentValue === array[currentIndex + 1]) {
          return accumulator + currentValue;
        }
      } else {
        if (currentValue === array[0]) {
          return accumulator + currentValue;
        }
      }

      return accumulator;
    }, 0);
};

module.exports = inverseCaptcha;
