const duet = (list) => {
  const instructions = list
    .split('\n')
    .map((x) => x.trim().split(' '));

  const registers = {};

  let position = 0;
  let frequency = 0;

  const getValue = (argument) => {
    return isNaN(parseInt(argument))
      ? (registers[argument] || 0)
      : parseInt(argument);
  };

  while (position > -1 && position < instructions.length) {
    const instruction = instructions[position];
    const command = instruction[0];
    const value1 = getValue(instruction[1]);
    const value2 = getValue(instruction[2]);

    if (command === 'snd') {
      frequency = value1;
    } else if (command === 'set') {
      registers[instruction[1]] = value2;
    } else if (command === 'add') {
      registers[instruction[1]] = value1 + value2;
    } else if (command === 'mul') {
      registers[instruction[1]] = value1 * value2;
    } else if (command === 'mod') {
      registers[instruction[1]] = value1 % value2;
    } else if (command === 'rcv' && value1 !== 0) {
      return frequency;
    } else if (command === 'jgz') {
      if (value1 > 0) {
        position += value2;

        continue;
      }
    }

    position++;
  }

  return frequency;
};

module.exports = duet;
