const recursiveCircus = (input) => {
  let nodes = {};

  const instructions = input
    .split('\n')
    .map((x) => x.trim());

  for (let i = 0; i < instructions.length; i++) {
    const match = instructions[i].match(/^([\w]+)\s\((\d+)\)(?:\s->\s)?(.*)$/i);

    const node = {
      name: match[1],
      weight: parseInt(match[2]),
      parent: null,
      children: match[3] ? match[3].split(', ') : [],
    };

    nodes[node.name] = node;
  }

  const keys = Object.keys(nodes);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    for (let j = 0; j < nodes[key].children.length; j++) {
      const child = nodes[key].children[j];

      nodes[key].children[j] = nodes[child];
      nodes[child].parent = nodes[key];
    }
  }

  const root = Object.values(nodes).find((node) => node.parent === null);

  return root.name;
};

module.exports = recursiveCircus;
