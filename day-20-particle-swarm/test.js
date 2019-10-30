const assert = require('assert');

const particles = require('./particles');
const particles2 = require('./particles2');

describe('Day 20: Particle Swarm', () => {
  it('should calculate nearest particle to <0,0,0>', () => {
    const instructions =
      `
        p=<3,0,0>, v=<2,0,0>, a=<-1,0,0>
        p=<4,0,0>, v=<0,0,0>, a=<-2,0,0>
      `;

    const particle = particles(instructions);

    assert.equal(particle.id, 0);
  });

  describe('Part Two', () => {
    it('should calculate number of particles left after all collisions', () => {
      const instructions =
        `
          p=<-6,0,0>, v=< 3,0,0>, a=< 0,0,0>
          p=<-4,0,0>, v=< 2,0,0>, a=< 0,0,0>
          p=<-2,0,0>, v=< 1,0,0>, a=< 0,0,0>
          p=< 3,0,0>, v=<-1,0,0>, a=< 0,0,0>
        `;

      const numberOfParticlesLeft = particles2(instructions);

      assert.equal(numberOfParticlesLeft, 1);
    });
  });
});
