const tubes = (input) => {
  const width = Math.max(...input.split('\n').map((line) => line.length));
  const maze = input
    .split('\n')
    .filter((line) => line.trim().length)
    .map((line) => line
      .padEnd(width)
      .split('')
      .map((x) => x.trim())
    );

  const path = [];

  const cursor = {
    x: maze[0].findIndex((x) => x === '|'),
    y: 0,
    direction: {
      x: 0,
      y: 1,
    },
  };

  while (maze[cursor.y][cursor.x]) {
    cursor.x += cursor.direction.x;
    cursor.y += cursor.direction.y;

    if (maze[cursor.y][cursor.x] === '|' || maze[cursor.y][cursor.x] === '-') {
      continue;
    }

    if (maze[cursor.y][cursor.x] === '+') {
      if (Math.abs(cursor.direction.y)) {
        if (maze[cursor.y][cursor.x - 1]) {
          cursor.direction.x = -1;
        } else if (maze[cursor.y][cursor.x + 1]) {
          cursor.direction.x = 1;
        }

        cursor.direction.y = 0;
      } else {
        if (maze[cursor.y - 1][cursor.x]) {
          cursor.direction.y = -1;
        } else if (maze[cursor.y + 1][cursor.x]) {
          cursor.direction.y = 1;
        }

        cursor.direction.x = 0;
      }
    } else if (maze[cursor.y][cursor.x]) {
      path.push(maze[cursor.y][cursor.x]);
    }
  }

  return path.join('');
};

module.exports = tubes;
