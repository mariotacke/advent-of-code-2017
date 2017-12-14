const digitalPlumber = (input) => {
  const traverse = (array, connections, alreadyVisited = []) => {
    const connectedPipes = connections
      .filter((x) => !alreadyVisited.includes(x));

    if (connectedPipes.includes(0)) {
      return true;
    }

    for (let i = 0; i < connections.length; i++) {
      if (!alreadyVisited.includes(connections[i])) {
        alreadyVisited.push(connections[i]);

        if (traverse(array, array[connections[i]], alreadyVisited)) {
          return true;
        }
      }
    }

    return false;
  };

  return input
    .split('\n')
    .map((connection) => connection
      .trim()
      .split(' <-> ')[1]
      .split(', ')
      .map((x) => parseInt(x))
    )
    .reduce((accumulator, currentValue, currentIndex, array) => {
      return accumulator + (traverse(array, currentValue) ? 1 : 0);
    }, 0);
};

module.exports = digitalPlumber;
