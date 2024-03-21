import { getData } from "./utils/general-utils"
import { sumItemPriorities } from "./utils/03-utils"


const path = `${__dirname}/../advent-2022/data/rucksacks.txt`


function splitRucksacks(rucksacks: string[]): string[][] {

  const rucksackHalves: string[][] = []

  rucksacks.forEach(rucksack => {
    return rucksackHalves.push([
      rucksack.slice(0, rucksack.length / 2),
      rucksack.slice(rucksack.length / 2)
    ])
  })

  return rucksackHalves
}


function findCommonItems(splitRucksacks: string[][]): string[] {

  const commonItems: string[] = []

  for (const splitRucksack of splitRucksacks) {

    let tempSet: Set<string> = new Set()

    for (const item of splitRucksack[0].split("")) {
      if (splitRucksack[1].split("").includes(item)) {
        tempSet.add(item)
      }
    }

    commonItems.push(...tempSet)
  }

  return commonItems
}


getData(path)
  .then((data) => {
    return splitRucksacks(data)
  })
  .then((result) => {
    return findCommonItems(result)
  })
  .then((result) => {
    return sumItemPriorities(result)
  })
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
