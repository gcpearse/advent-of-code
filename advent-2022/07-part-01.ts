import { Directories } from "./types/07-types"
import { getDirectories, splitData } from "./utils/07-utils"
import { getData } from "./utils/general-utils"


const path = `${__dirname}/../../advent-2022/data/terminal-output.txt`


function filterDirectories(directories: Directories): Directories {

  for (const key in directories) {
    if (directories[key] > 100000) delete directories[key]
  }

  return directories
}


function sumSizes(filteredDirectories: Directories): number {

  const allValues = Object.values(filteredDirectories)

  return allValues.reduce((a, b) => a + b)
}


getData(path)
  .then((data) => {
    return splitData(data)
  })
  .then((result) => {
    return getDirectories(result)
  })
  .then((result) => {
    return filterDirectories(result)
  })
  .then((result) => {
    return sumSizes(result)
  })
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
