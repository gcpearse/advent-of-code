import { Tally } from "./types/02-types"
import { sliceData, parseGames, tallyCubes } from "./utils/02-utils"
import { getData } from "./utils/general-utils"


const path = `${__dirname}/../../advent-2023/data/game-record.txt`


function sumCubeSetPowers(tallies: Tally[]): number {

  let sumOfPowers = 0

  for (const tally of tallies) {
    sumOfPowers += (tally.red * tally.green * tally.blue)
  }

  return sumOfPowers
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
  .then((data) => {
    return sumCubeSetPowers(data)
  })
  .then((result) => {
    console.log(result)
  })
