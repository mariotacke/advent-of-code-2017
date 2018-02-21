const parseBlock = (block) => {
  return {
    write: parseInt(block[0].match(/- Write the value (\d)\./)[1]),
    move: block[1].match(/- Move one slot to the (.*)\./)[1] === 'left' ? -1 : 1,
    next: block[2].match(/- Continue with state (.)./)[1],
  };
};

const turing = (instructions) => {
  const lines = instructions
    .split('\n')
    .filter((line) => line.trim())
    .map((line) => line.trim());

  let tape = [0];
  let currentIndex = 0;
  let currentState = lines.shift().match(/Begin in state (.)\./)[1];
  let cursor = parseInt(lines.shift()
    .match(/Perform a diagnostic checksum after (\d+) steps\./)[1]);

  const states = lines.reduce((accumulator, currentValue, currentIndex, array) => {
    const instruction = currentValue.match(/In state (.):/);

    if (instruction) {
      const key = instruction[1];

      accumulator[key] = {
        0: parseBlock(array.slice(currentIndex + 2, currentIndex + 5)),
        1: parseBlock(array.slice(currentIndex + 6, currentIndex + 9)),
      };
    }

    return accumulator;
  }, {});

  while (cursor !== 0) {
    const currentValue = tape[currentIndex];
    const { write, move, next } = states[currentState][currentValue];

    tape[currentIndex] = write;
    currentIndex += move;
    currentState = next;

    if (currentIndex === -1) {
      tape.unshift(0);
      currentIndex++;
    } else if (currentIndex === tape.length) {
      tape.push(0);
    }

    cursor--;
  }

  return tape.filter((x) => x).length;
};

module.exports = turing;
