const packetScanner = (input) => {
  const layers = input
    .split('\n')
    .map((layer) => {
      const [depth, range] = layer
        .trim()
        .split(': ')
        .map((x) => parseInt(x));

      return {
        depth,
        range,
      };
    });

  const tick = (array, direction = 1) => {
    array.forEach((layer) => {
      if (layer) {
        layer.position += layer.direction;

        if (layer.position === layer.range - 1 || layer.position === 0) {
          layer.direction *= -1 * direction;
        }
      }
    });
  };

  const firewallDepth = layers[layers.length - 1].depth;
  let firewall = new Array(firewallDepth).fill(null);

  for (let i = 0; i < firewallDepth; i++) {
    if (layers[i]) {
      const { depth, range } = layers[i];

      firewall[depth] = {
        depth,
        range,
        position: 0,
        direction: 1,
      };
    }
  }

  const packet = {
    canPassSafely: false,
    hasBeenCaught: false,
    delay: 0,
    position: 0,
  };

  let firewallSnapshot = JSON.stringify(firewall);

  while (!packet.canPassSafely) {
    for (let i = 0; i <= firewallDepth; i++) {
      const layer = firewall[i];

      packet.position = i;

      if (layer && layer.position === 0) {
        packet.hasBeenCaught = true;
      }

      tick(firewall);
    }

    if (!packet.hasBeenCaught) {
      packet.canPassSafely = true;
    }

    firewall = JSON.parse(firewallSnapshot);
    tick(firewall);
    firewallSnapshot = JSON.stringify(firewall);

    packet.delay += 1;
    packet.hasBeenCaught = false;
  }

  return packet.delay - 1;
};

module.exports = packetScanner;
