import { Directories } from "./types/07-types"
import { getDirectories, splitData } from "./utils/07-utils"
import { getData } from "./utils/general-utils"


const path = `${__dirname}/../advent-2022/data/terminal-output.txt`


function findDirectoryToDelete(directories: Directories): number | void {

  const usedSpace = directories["/root"]

  const requiredSpace = usedSpace - 40000000

  const sortedValues = Object.values(directories).sort((a, b) => a - b)

  for (const value of sortedValues) {
    if (value > requiredSpace) {
      return value
    }
  }
}


getData(path)
  .then((data) => {
    return splitData(data)
  })
  .then((result) => {
    return getDirectories(result)
  })
  .then((result) => {
    return findDirectoryToDelete(result)
  })
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
