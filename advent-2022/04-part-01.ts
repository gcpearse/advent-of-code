import { getData } from "./utils/general-utils"
import { createPairs, createNestedPairs } from "./utils/04-utils"


const path = `${__dirname}/../../advent-2022/data/section-assignments.txt`


function sumFullyOverlappingRanges(nestedPairs: string[][][]): number {

  let sum = 0

  nestedPairs.forEach(nestedPair => {
    if (
      (+nestedPair[0][0] <= +nestedPair[1][0] && +nestedPair[0][1] >= +nestedPair[1][1]) ||
      (+nestedPair[0][0] >= +nestedPair[1][0] && +nestedPair[0][1] <= +nestedPair[1][1])
    ) {
      sum++
    }
  })

  return sum
}


getData(path)
  .then((data) => {
    return createPairs(data)
  })
  .then((result) => {
    return createNestedPairs(result)
  })
  .then((result) => {
    return sumFullyOverlappingRanges(result)
  })
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
