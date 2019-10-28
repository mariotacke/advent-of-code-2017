const EventEmitter = require('events');

class Program extends EventEmitter {
  constructor (instructions, programId) {
    super();

    this.queue = [];
    this.instructions = instructions;
    this.programId = programId;
    this.position = 0;
    this.sendCounter = 0;
    this.registers = {
      p: programId,
    };
  }

  run () {
    const getValue = (argument) => {
      return isNaN(parseInt(argument))
        ? (this.registers[argument] || 0)
        : parseInt(argument);
    };

    while (this.position > -1 && this.position < this.instructions.length) {
      const instruction = this.instructions[this.position];
      const command = instruction[0];
      const value1 = getValue(instruction[1]);
      const value2 = getValue(instruction[2]);

      if (command === 'snd') {
        this.send(value1);
      } else if (command === 'set') {
        this.registers[instruction[1]] = value2;
      } else if (command === 'add') {
        this.registers[instruction[1]] = value1 + value2;
      } else if (command === 'mul') {
        this.registers[instruction[1]] = value1 * value2;
      } else if (command === 'mod') {
        this.registers[instruction[1]] = value1 % value2;
      } else if (command === 'rcv') {
        const value = this.queue.shift();

        if (!value) {
          break;
        } else {
          this.registers[instruction[1]] = value;
        }
      } else if (command === 'jgz') {
        if (value1 > 0) {
          this.position += value2;

          continue;
        }
      }

      this.position++;
    }
  }

  send (value) {
    this.emit('send', value);
    this.sendCounter++;
  }

  receive (value) {
    this.queue.push(value);
  }
}

module.exports = (list) => {
  const instructions = list
    .split('\n')
    .map((x) => x.trim().split(' '));

  const program0 = new Program(instructions, 0);
  const program1 = new Program(instructions, 1);

  program0.on('send', (value) => program1.receive(value));
  program1.on('send', (value) => program0.receive(value));

  do {
    program0.run();
    program1.run();
  } while (program0.queue.length || program1.queue.length);

  return program1.sendCounter;
};
