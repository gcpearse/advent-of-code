import { Tally } from "./types/02-types"
import { sliceData, parseGames, tallyCubes } from "./utils/02-utils"
import { getData } from "./utils/general-utils"


const path = `${__dirname}/../../advent-2023/data/game-record.txt`


function findPossibleGames(tallies: Tally[]): number {

  let result = 0

  for (const tally of tallies) {
    if (tally.red <= 12 && tally.green <= 13 && tally.blue <= 14) {
      result += tallies.indexOf(tally) + 1
    }
  }

  return result
}


getData(path)
  .then((data) => {
    return sliceData(data)
  })
  .then((data) => {
    return parseGames(data)
  })
  .then((data) => {
    return tallyCubes(data)
  })
  .then((result) => {
    return findPossibleGames(result)
  })
  .then((result) => {
    console.log(result)
  })
