import { Tally } from "../types/02-types"


export const tallyRounds = (rounds: string[]) => {

  const tally: Tally = {}

  for (const round of rounds) {
    if (!tally[round]) {
      tally[round] = 1
    } else {
      tally[round]++
    }
  }

  return tally
}
