exports.extractData = (data) => {
  const crateRows = [];
  const moves = [];
  data.forEach(row => {
    if (row.match(/[A-Z]/)) {
      return crateRows.push(row);
    }
    if (row.match(/move \d+ from \d+ to \d+/)) {
      return moves.push(row);
    }
  });
  return Promise.all([crateRows, moves]);
};

exports.createStacks = (crateRows, moves) => {
  const stacks = [];
  for (let i = 1; i < crateRows[0].length; i += 4) {
    const stack = [];
    for (let row of crateRows) {
      if (row[i] !== ' ') {
        stack.push(row[i]);
      }
    }
    stacks.push(stack);
  }
  return Promise.all([stacks, moves]);
};

exports.createSteps = (stacks, moves) => {
  const split = moves.map((move) => {
    return move.split(' ');
  });
  const steps = split.map((line) => {
    return line.filter((item) => {
      return item.match(/\d/);
    });
  });
  return Promise.all([stacks, steps]);
};

exports.findTopCrates = (stacks) => {
  let code = '';
  stacks.forEach((stack) => code += stack[0]);
  return code;
};
