const highEntropyPassphrases = (input) => {
  return input
    .split('\n')
    .map((x) => x.trim().split(/[\s\t/]+/))
    .reduce((accumulator, currentValue) => {
      const uniqueWords = [...new Set(currentValue)];

      return accumulator + (uniqueWords.length === currentValue.length ? 1 : 0);
    }, 0);
};

module.exports = highEntropyPassphrases;
