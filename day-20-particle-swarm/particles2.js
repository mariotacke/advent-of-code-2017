class Particle {
  constructor (buffer, id) {
    const values = buffer
      .match(/(-?\d+)/g)
      .map((value) => parseInt(value));

    this.id = id;

    this.position = {
      x: parseInt(values[0]),
      y: parseInt(values[1]),
      z: parseInt(values[2]),
    };

    this.velocity = {
      x: parseInt(values[3]),
      y: parseInt(values[4]),
      z: parseInt(values[5]),
    };

    this.acceleration = {
      x: parseInt(values[6]),
      y: parseInt(values[7]),
      z: parseInt(values[8]),
    };

    this.updateMarker();
  }

  tick () {
    this.velocity.x += this.acceleration.x;
    this.velocity.y += this.acceleration.y;
    this.velocity.z += this.acceleration.z;

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.position.z += this.velocity.z;

    this.updateMarker();
  }

  updateMarker () {
    this.marker = `p<${this.position.x},${this.position.y},${this.position.z}>`;
  }
}

const particles = (input) => {
  let particles = input
    .split('\n')
    .filter((line) => line.trim().length)
    .map((line, id) => new Particle(line, id));

  const withinSimulation = ({ position }, limit = 10000) => {
    return (position.x >= -limit && position.x <= limit) &&
      (position.y >= -limit && position.y <= limit) &&
      (position.z >= -limit && position.z <= limit);
  };

  while (particles.some((p) => withinSimulation(p))) {
    const collisions = new Set();

    for (let i = 0; i < particles.length; i++) {
      particles
        .filter((particle) => {
          return particle.id !== particles[i].id &&
            particle.marker === particles[i].marker;
        })
        .forEach(({ id }) => collisions.add(id));
    }

    // remove particles with collisions
    particles = particles.filter(({ id }) => !collisions.has(id));

    // advance simulation
    particles.forEach((particle) => particle.tick());
  }

  return particles.length;
};

module.exports = particles;
