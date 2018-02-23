const particles = (input) => {
  const particles = input
    .split('\n')
    .filter((line) => line.trim().length)
    .map((line, id) => {
      const [ , x, y, z ] = line.match(/a=<(.+),(.+),(.+)>/);

      return {
        id,
        length: Math.sqrt(
          Math.pow(parseInt(x), 2) +
          Math.pow(parseInt(y), 2) +
          Math.pow(parseInt(z), 2)
        ),
      };
    })
    .sort((a, b) => a.length - b.length);

  return particles[0];
};

module.exports = particles;
