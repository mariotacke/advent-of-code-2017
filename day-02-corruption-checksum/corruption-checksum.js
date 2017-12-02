const corruptionChecksum = (input) => {
  return input
    .split('\n')
    .map((x) => x.trim()
      .split(/[\s\t/]+/)
      .map((y) => parseInt(y))
    )
    .reduce((accumulator, currentValue, currentIndex, array) => {
      const high = Math.max.apply(null, currentValue);
      const low = Math.min.apply(null, currentValue);
      
      return accumulator + Math.abs(high - low);
    }, 0);
};

module.exports = corruptionChecksum;