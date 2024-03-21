export const createArrayOfArrays = (items: string[]): number[][] => {
  
  const arrayOfArrays: number[][] = []

  let tempArray: number[] = []

  for (const item of items) {
    if (item !== "") {
      tempArray.push(+item)
    } else {
      arrayOfArrays.push(tempArray)
      tempArray = []
    }
  }

  return arrayOfArrays
}


export const findTotals = (arrayOfArrays: number[][]): number[] => {
  
  return arrayOfArrays.map(array => {
    return array.reduce((a, b) => a + b)
  })
}
