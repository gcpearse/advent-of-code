const { getData } = require("./utils/general-utils");

const path = `${__dirname}/data/rearrangement-procedure.txt`;

function extractData(data) {
  const crateRows = [];
  const moves = [];
  data.forEach(row => {
    if (row.match(/[A-Z]/)) {
      return crateRows.push(row);
    }
    if (row.match(/^move \d+ from \d+ to \d+/)) {
      return moves.push(row);
    }
  });
  return Promise.all([crateRows, moves]);
}

function createstacks(crateRows, moves) {
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
}

function createSteps(stacks, moves) {
  const split = moves.map((move) => {
    return move.split(' ');
  });
  const steps = split.map((line) => {
    return line.filter((item) => {
      return item.match(/\d/);
    });
  });
  return Promise.all([stacks, steps]);
}

function rearrangeCrates(stacks, steps) {
  for (let step of steps) {
    const move = step[0];
    const from = step[1] - 1;
    const to = step[2] - 1;
    for (let i = 0; i < move; i++) {
      stacks[to].unshift(stacks[from].shift());
    }
  }
  return stacks;
}

function findTopCrates(stacks) {
  let code = '';
  stacks.forEach((stack) => code += stack[0]);
  return code;
}

getData(path)
  .then((data) => {
    return extractData(data);
  })
  .then(([crateRows, moves]) => {
    return createstacks(crateRows, moves);
  })
  .then(([stacks, moves]) => {
    return createSteps(stacks, moves);
  })
  .then(([stacks, steps]) => {
    return rearrangeCrates(stacks, steps);
  })
  .then((result) => {
    return findTopCrates(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
