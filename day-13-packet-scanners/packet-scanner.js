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

  const tick = (array) => {
    array.forEach((layer) => {
      if (layer) {
        layer.position += layer.direction;

        if (layer.position === layer.range - 1 || layer.position === 0) {
          layer.direction *= -1;
        }
      }
    });
  };

  const firewallDepth = layers[layers.length - 1].depth;
  const firewall = new Array(firewallDepth).fill(null);

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

  const packet = { position: 0, severity: 0 };

  for (let i = 0; i <= firewallDepth; i++) {
    const layer = firewall[i];

    packet.position = i;

    if (layer && layer.position === 0) {
      packet.severity += layer.depth * layer.range;
    }

    tick(firewall);
  }

  return packet.severity;
};

module.exports = packetScanner;
