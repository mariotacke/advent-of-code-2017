const spiralMemory = (input) => {
  const squareRoot = Math.ceil(Math.sqrt(input));
  const gridSize = squareRoot + ((squareRoot - 1) % 2 === 0 ? 2 : 3);
  
  const grid = [];
  
  const getAdjecentSum = (pos) => {
    const adjecentSum = 
      (grid[pos.y - 1][pos.x - 1] || 0)+
      (grid[pos.y - 1][pos.x] || 0)+
      (grid[pos.y - 1][pos.x + 1] || 0)+
      (grid[pos.y][pos.x - 1] || 0)+
      (grid[pos.y][pos.x + 1] || 0)+
      (grid[pos.y + 1][pos.x - 1] || 0)+
      (grid[pos.y + 1][pos.x] || 0)+
      (grid[pos.y + 1][pos.x + 1] || 0);
      
    return adjecentSum === 0 ? 1 : adjecentSum;
  };
  
  for (let i = 0; i < gridSize; i++) {
    grid.push(new Array(gridSize));
  }
  
  const pos = {
    x: Math.floor(gridSize / 2),
    y: Math.floor(gridSize / 2)
  };

  for (let i = 1; i <= input; i++) {
    grid[pos.y][pos.x] = getAdjecentSum(pos);
    
    if (grid[pos.y][pos.x] > input) {
      return grid[pos.y][pos.x];
    }

    if (!grid[pos.y][pos.x - 1]) {
      if (grid[pos.y + 1][pos.x - 1] && grid[pos.y + 1][pos.x]) {
        pos.x -= 1;
      } else {
        if (grid[pos.y][pos.x + 1]) {
          if (!grid[pos.y + 1][pos.x]) {
            pos.y += 1;
          } else {
            pos.x -= 1;
          }
        } else {
          pos.x += 1;  
        }
      }
    } else {
      if (!grid[pos.y][pos.x + 1] && grid[pos.y - 1][pos.x]) {
        pos.x += 1;
      } else {
        pos.y -= 1;
      }
    }
  }
};

module.exports = spiralMemory;