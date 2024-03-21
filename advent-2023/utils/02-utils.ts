import { Tally } from "../types/02-types"


export const sliceData = (data: string[]): string[] => {

  return data.map((line) => {
    return line.slice(line.indexOf(":") + 2)
  })
}


export const parseGames = (data: string[]): string[][][] => {

  const parsedData = data.map(line => {
    return line.replace(/\;/g, ",")
  })

  const games = parsedData.map(line => {
    return line.split(", ")
  })

  return games.map(game => {
    return game.map(move => {
      return move.split(" ")
    })
  })
}


export const tallyCubes = (games: string[][][]) => {

  const result: Tally[] = []

  for (const game of games) {

    const tally: Tally = {
      red: 0,
      green: 0,
      blue: 0
    }

    for (let i = 0; i < game.length; i++) {
      if (+game[i][0] > tally[game[i][1]]) {
        tally[game[i][1]] = +game[i][0]
      }
    }

    result.push(tally)
  }

  return result
}
