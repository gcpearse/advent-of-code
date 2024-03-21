import { getData } from "./utils/general-utils"
import { createArrayOfArrays, findTotals } from "./utils/01-utils"


const path = `${__dirname}/../advent-2022/data/elf-calories.txt`


function findHighestTotal(arrayOfTotals: number[]): number {
  
  return Math.max(...arrayOfTotals)
}


getData(path)
  .then((data) => {
    return createArrayOfArrays(data)
  })
  .then((result) => {
    return findTotals(result)
  })
  .then((result) => {
    return findHighestTotal(result)
  })
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
