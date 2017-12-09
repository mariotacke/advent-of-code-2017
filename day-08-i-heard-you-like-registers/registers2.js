const registers = (input) => {
  const registers = {};

  const instructions = input
    .split('\n')
    .map((x) => {
      const parts = x.trim()
        .split(' ');

      return {
        register: parts[0],
        value: (parts[1] === 'inc' ? 1 : -1) * parseInt(parts[2]),
        condition: {
          register: parts[4],
          op: parts[5],
          value: parseInt(parts[6]),
        },
      };
    });

  let highestValue = 0;

  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i];
    const condition = instruction.condition;

    if (!registers[condition.register]) {
      registers[condition.register] = 0;
    }

    if (eval(`${registers[condition.register]} ${condition.op} ${condition.value}`)) {
      if (!registers[instruction.register]) {
        registers[instruction.register] = 0;
      }

      registers[instruction.register] += instruction.value;

      if (registers[instruction.register] > highestValue) {
        highestValue = registers[instruction.register];
      }
    }
  }

  return highestValue;
};

module.exports = registers;
