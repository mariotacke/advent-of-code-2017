class Component {
  constructor (portA, portB) {
    this.portA = portA;
    this.portB = portB;
    this.portSum = portA + portB;
  }

  fits (port) {
    return this.portA === port || this.portB === port;
  }

  otherPort (port) {
    return this.portA === port ? this.portB : this.portA;
  }

  equals (component) {
    return this.portA === component.portA && this.portB === component.portB;
  }
}

function permute (currentPort, components, bridge = []) {
  let bridges = [];

  components
    .filter((component) => component.fits(currentPort))
    .forEach((component) => {
      const leftOverComponents = components.filter((_) => !_.equals(component));
      const otherPort = component.otherPort(currentPort);
      const currentBridge = [...bridge, component];
      const otherBridges = permute(otherPort, leftOverComponents, currentBridge);

      bridges = [
        ...bridges,
        currentBridge,
        ...otherBridges
      ];
    });

  return bridges;
}

module.exports = (input) => {
  const components = input
    .split('\n')
    .map((line) => line
      .trim()
      .split('/')
      .map((x) => parseInt(x)))
    .map(([portA, portB]) => new Component(portA, portB));

  const possibleBridges = permute(0, components);
  const longestBridgeLength = possibleBridges
    .map((_) => _.length)
    .sort((a, b) => b - a)[0];

  return possibleBridges
    .filter((bridge) => bridge.length === longestBridgeLength)
    .map((bridge) => bridge.reduce((strength, component) => {
      return strength + component.portSum;
    }, 0))
    .sort((a, b) => b - a)[0];
};
