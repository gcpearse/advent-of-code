import { getData } from "./utils/general-utils"
import { tallyRounds } from "./utils/02-utils"
import { Tally } from "./types/02-types"


const path = `${__dirname}/../../advent-2022/data/strategy-guide.txt`


function getScore(tally: Tally): number {

  let score = 0

  for (const key in tally) {
    if (key === "B X") score += 1 * tally[key]
    if (key === "C X") score += 2 * tally[key]
    if (key === "A X") score += 3 * tally[key]
    if (key === "A Y") score += 4 * tally[key]
    if (key === "B Y") score += 5 * tally[key]
    if (key === "C Y") score += 6 * tally[key]
    if (key === "C Z") score += 7 * tally[key]
    if (key === "A Z") score += 8 * tally[key]
    if (key === "B Z") score += 9 * tally[key]
  }

  return score
}


getData(path)
  .then((data) => {
    return tallyRounds(data)
  })
  .then((result) => {
    return getScore(result)
  })
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
