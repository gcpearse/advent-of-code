import { getData } from "./utils/general-utils"


const path = `${__dirname}/../../advent-2023/data/calibration.txt`


const regexOne = /one|two|three|four|five|six|seven|eight|nine|\d/g

const regexTwo = /one(?!ight)|two(?!ne)|three(?!ight)|four|five(?!ight)|six|seven(?!ine)|eight(?!wo)|nine(?!ight)|\d/g


function convertToDigits(number: string): string {

  if (number === "one") return "1"

  if (number === "two") return "2"

  if (number === "three") return "3"

  if (number === "four") return "4"

  if (number === "five") return "5"

  if (number === "six") return "6"

  if (number === "seven") return "7"

  if (number === "eight") return "8"

  if (number === "nine") return "9"

  return number
}


function sumCalibrationValues(data: string[]): number {

  const firstValues = data.map((line) => {
    return convertToDigits(line.match(regexOne)![0])
  })

  const lastValues = data.map((line) => {
    const newLine = line.match(regexTwo)
    return convertToDigits(newLine![newLine!.length - 1])
  })

  const firstAndLast: string[] = []

  firstValues.forEach((value, index) => {
    firstAndLast.push(value + lastValues[index])
  })

  const numbers = firstAndLast.map(n => +n)
  
  return numbers.reduce((a, b) => a + b)
}


getData(path)
  .then((data) => {
    return sumCalibrationValues(data)
  })
  .then((result) => {
    console.log(result)
  })
