const memoryReallocation = (input) => {
  const banks = input.trim().split(/[\s\t/]+/).map((x) => parseInt(x));

  const patterns = {};
  
  let snapshot = banks.join(':');
  let reallocations = 0;

  while (!patterns[snapshot]) {
    let blocks = Math.max(...banks);
    let currentIndex = banks.findIndex((x) => x === blocks);
    
    banks[currentIndex] = 0;
    currentIndex += 1;
    
    while (blocks > 0) {
      if (currentIndex === banks.length) {
        currentIndex = 0;
      }
      
      banks[currentIndex] += 1;
      currentIndex += 1;
      blocks -= 1;
    }
    
    patterns[snapshot] = true;

    snapshot = banks.join(':');
    reallocations += 1;
  }
  
  return reallocations;
};

module.exports = memoryReallocation;