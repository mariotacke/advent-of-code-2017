const streamProcessing = (stream) => {
  let score = 0;
  let lastScore = 0;
  let isGroup = false;
  let isGarbage = false;
  let ignoreNext = false;

  for (let i = 0; i < stream.length; i++) {
    if (ignoreNext) {
      ignoreNext = false;
      continue;
    }

    if (stream[i] === '!') {
      ignoreNext = true;
    }

    if (stream[i] === '<') {
      isGarbage = true;
    }

    if (stream[i] === '>') {
      isGarbage = false;
    }

    if (stream[i] === '{' && !isGarbage) {
      isGroup = true;
      score += lastScore++ + 1;
    }

    if (stream[i] === '}' && !isGarbage) {
      isGroup = false;
      lastScore -= 1;
    }
  }

  return score;
};

module.exports = streamProcessing;
