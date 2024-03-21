export const sumItemPriorities = (commonItems: string[]): number => {

  let sum = 0

  for (const item of commonItems) {
    if (item.match(/[a-z]/)) {
      sum += item.charCodeAt(0) - 96
    }
    if (item.match(/[A-Z]/)) {
      sum += item.charCodeAt(0) - 38
    }
  }

  return sum
}
