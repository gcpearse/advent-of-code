export const createPairs = (ranges: string[]): string[][] => {
  
  return ranges.map(range => range.split(","))
}


export const createNestedPairs = (pairs: string[][]): string[][][] => {
  
  return pairs.map(pair => {
    return [
      pair[0].split("-"),
      pair[1].split("-")
    ]
  })
}
