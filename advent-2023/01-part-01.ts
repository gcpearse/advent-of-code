import { getData } from "./utils/general-utils"


const path = `${__dirname}/../../advent-2023/data/calibration.txt`


function splitData(data: string[]): string[][] {

  return data.map((line) => line.split(""))
}


function sumCalibrationValues(data: string[][]): number {

  const firstAndLast: string[] = []

  for (const line of data) {

    const first = line.find(char => char.match(/\d/))

    const last = line.reverse().find(char => char.match(/\d/))

    if (first && last) firstAndLast.push(first + last)
  }

  const numbers = firstAndLast.map(n => +n)

  return numbers.reduce((a, b) => a + b)
}


getData(path)
  .then((data) => {
    return splitData(data)
  })
  .then((data) => {
    return sumCalibrationValues(data)
  })
  .then((result) => {
    console.log(result)
  })
