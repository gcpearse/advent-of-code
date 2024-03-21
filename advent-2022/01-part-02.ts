import { getData } from "./utils/general-utils"
import { createArrayOfArrays, findTotals } from "./utils/01-utils"


const path = `${__dirname}/../advent-2022/data/elf-calories.txt`


function findTopThreeTotals(arrayOfTotals: number[]): number {

  const sortedTotals = arrayOfTotals.sort((a, b) => b - a)

  const topThree = sortedTotals.splice(0, 3)

  return topThree.reduce((a, b) => a + b)
}


getData(path)
  .then((data) => {
    return createArrayOfArrays(data)
  })
  .then((result) => {
    return findTotals(result)
  })
  .then((result) => {
    return findTopThreeTotals(result)
  })
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
