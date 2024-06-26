import { extractData, createStacks, createSteps, findTopCrates } from "./utils/05-utils"
import { getData } from "./utils/general-utils"


const path = `${__dirname}/../../advent-2022/data/rearrangement-procedure.txt`


function rearrangeCrates(stacks: string[][], steps: string[][]): string[][] {

  for (const step of steps) {

    const move = +step[0]

    const from = +step[1] - 1

    const to = +step[2] - 1

    for (let i = 0; i < move; i++) {
      stacks[to].unshift(stacks[from].shift()!)
    }
  }

  return stacks
}


getData(path)
  .then((data) => {
    return extractData(data)
  })
  .then(([crateRows, moves]) => {
    return createStacks(crateRows, moves)
  })
  .then(([stacks, moves]) => {
    return createSteps(stacks, moves)
  })
  .then(([stacks, steps]) => {
    return rearrangeCrates(stacks, steps)
  })
  .then((result) => {
    return findTopCrates(result)
  })
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
