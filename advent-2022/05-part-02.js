const { extractData, createStacks, createSteps, findTopCrates } = require("./utils/05-utils");
const { getData } = require("./utils/general-utils");

const path = `${__dirname}/data/rearrangement-procedure.txt`;

function rearrangeCrates(stacks, steps) {
  for (let step of steps) {
    const move = step[0];
    const from = step[1] - 1;
    const to = step[2] - 1;
    const crates = stacks[from].splice(0, move);
    stacks[to].unshift(...crates);
  }
  return stacks;
}

getData(path)
  .then((data) => {
    return extractData(data);
  })
  .then(([crateRows, moves]) => {
    return createStacks(crateRows, moves);
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
