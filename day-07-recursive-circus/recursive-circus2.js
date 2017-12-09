const recursiveCircus = (input) => {
  const nodes = {};

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

  const weigh = (node) => {
    return node.weight + node.children
      .map(weigh)
      .reduce((sum, current) => sum + current, 0);
  };

  let answer = 0;

  const traverse = (node, difference = 0) => {
    const children = node.children.map((child) => {
      return {
        name: child.name,
        weight: weigh(child)
      };
    });

    const unbalancedChild = children.find((child) => {
      return children.filter((x) => x.weight === child.weight).length === 1;
    });

    if (!unbalancedChild) {
      answer = nodes[node.name].weight - difference;
    } else {
      const balancedChild = children
        .find((child) => children.filter((x) => x.weight === child.weight).length > 1);

      traverse(nodes[unbalancedChild.name], unbalancedChild.weight - balancedChild.weight);
    }
  };

  const rootNode = Object.values(nodes).find((node) => node.parent === null);

  traverse(rootNode);

  return answer;
};

module.exports = recursiveCircus;
