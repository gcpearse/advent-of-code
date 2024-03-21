export const extractData = (data: string[]): Promise<[string[], string[]]> => {

  const crateRows: string[] = []

  const moves: string[] = []

  data.forEach(row => {
    if (row.match(/[A-Z]/)) {
      return crateRows.push(row)
    } else if (row.match(/move \d+ from \d+ to \d+/)) {
      return moves.push(row)
    } else {
      return undefined
    }
  })

  return Promise.all([crateRows, moves])
}


export const createStacks = (crateRows: string[], moves: string[]): Promise<[string[][], string[]]> => {

  const stacks: string[][] = []

  for (let i = 1; i < crateRows[0].length; i += 4) {

    const stack: string[] = []

    for (const row of crateRows) {
      if (row[i] !== " ") {
        stack.push(row[i])
      }
    }

    stacks.push(stack)
  }

  return Promise.all([stacks, moves])
}


export const createSteps = (stacks: string[][], moves: string[]): Promise<[string[][], string[][]]> => {

  const split = moves.map((move) => {
    return move.split(" ")
  })

  const steps = split.map((line) => {
    return line.filter((item) => {
      return item.match(/\d/)
    })
  })

  return Promise.all([stacks, steps])
}


export const findTopCrates = (stacks: string[][]): string => {

  let code = ""

  stacks.forEach(stack => code += stack[0])

  return code
}
