const duet = (list) => {
  const instructions = list
    .split('\n')
    .map((x) => x.trim().split(' '));

  const registers = {};

  let position = 0;

  const getValue = (argument) => {
    return isNaN(parseInt(argument))
      ? (registers[argument] || 0)
      : parseInt(argument);
  };

  let numberOfTimesMulInvoked = 0;

  while (position > -1 && position < instructions.length) {
    const instruction = instructions[position];
    const command = instruction[0];
    const value1 = getValue(instruction[1]);
    const value2 = getValue(instruction[2]);

    if (command === 'set') {
      registers[instruction[1]] = value2;
    } else if (command === 'sub') {
      registers[instruction[1]] = value1 - value2;
    } else if (command === 'mul') {
      registers[instruction[1]] = value1 * value2;
      numberOfTimesMulInvoked++;
    } else if (command === 'jnz') {
      if (value1 !== 0) {
        position += value2;

        continue;
      }
    }

    position++;
  }

  return numberOfTimesMulInvoked;
};

module.exports = duet;
