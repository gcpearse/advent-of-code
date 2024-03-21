import { getData } from "./utils/general-utils"
import { sumItemPriorities } from "./utils/03-utils"


const path = `${__dirname}/../advent-2022/data/rucksacks.txt`


function makeGroupsOfThree(rucksacks: string[]): string[][] {

  const groups: string[][] = []

  while (rucksacks.length > 0) {
    groups.push(rucksacks.splice(0, 3))
  }

  return groups
}


function findCommonItems(groups: string[][]): string[] {

  const commonItems: string[] = []

  for (const group of groups) {

    let tempSet: Set<string> = new Set()

    for (const item of group[0].split("")) {
      if (
        group[1].split("").includes(item) &&
        group[2].split("").includes(item)
      ) {
        tempSet.add(item)
      }
    }

    commonItems.push(...tempSet)
  }

  return commonItems
}


getData(path)
  .then((data) => {
    return makeGroupsOfThree(data)
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
