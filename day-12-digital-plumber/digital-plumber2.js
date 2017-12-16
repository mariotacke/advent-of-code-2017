const digitalPlumber = (input) => {
  const traverse = (array, connections, alreadyVisited) => {
    const connectedPipes = connections
      .filter((x) => !alreadyVisited.has(x));

    for (let i = 0; i < connectedPipes.length; i++) {
      alreadyVisited.add(connectedPipes[i]);

      traverse(array, array[connectedPipes[i]], alreadyVisited);
    }

    return alreadyVisited;
  };

  return [...new Set(input
    .split('\n')
    .map((connection) => connection
      .trim()
      .split(' <-> ')[1]
      .split(', ')
      .map((x) => parseInt(x))
    )
    .map((currentValue, currentIndex, array) =>
      [...traverse(array, currentValue, new Set())].sort().join(',')
    ))].length;
};

module.exports = digitalPlumber;
