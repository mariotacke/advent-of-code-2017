const corruptionChecksum = (input) => {
  return input
    .split('\n')
    .map((x) => x.trim()
      .split(/[\s\t/]+/)
      .map((y) => parseInt(y))
    )
    .reduce((accumulator, currentValue) => {
      for (let i = 0; i < currentValue.length; i++) {
        const candidates = currentValue.filter((x) => x !== currentValue[i]);
        
        for (var j = 0; j < candidates.length; j++) {
          if (currentValue[i] % candidates[j] === 0) {
            return accumulator + currentValue[i] / candidates[j];
          }
        }
      }
    }, 0);
};

module.exports = corruptionChecksum;