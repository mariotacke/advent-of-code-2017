const streamProcessing = (stream) => {
  let isGarbage = false;
  let ignoreNext = false;

  let nonCanceledGarbageCharacters = 0;

  for (let i = 0; i < stream.length; i++) {
    if (ignoreNext) {
      ignoreNext = false;
      continue;
    }

    if (stream[i] === '!') {
      ignoreNext = true;
      continue;
    }

    if (stream[i] === '<' && !isGarbage) {
      isGarbage = true;
      continue;
    }

    if (stream[i] === '>' && isGarbage) {
      isGarbage = false;
      continue;
    }

    if (isGarbage) {
      nonCanceledGarbageCharacters += 1;
    }
  }

  return nonCanceledGarbageCharacters;
};

module.exports = streamProcessing;
