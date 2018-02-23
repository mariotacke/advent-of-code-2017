const assert = require('assert');

const particles = require('./particles');

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
});
