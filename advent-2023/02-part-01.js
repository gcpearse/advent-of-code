const { sliceData, parseGames, tallyCubes } = require("./utils/02-utils");
const { getData } = require("./utils/general-utils");

const path = `${__dirname}/data/game-record.txt`;

function findPossibleGames(tallies) {
  let result = 0;
  for (let tally of tallies) {
    if (tally.red <= 12 && tally.green <= 13 && tally.blue <= 14) {
      result += tallies.indexOf(tally) + 1;
    }
  }
  return result;
}

getData(path)
  .then((data) => {
    return sliceData(data);
  })
  .then((data) => {
    return parseGames(data);
  })
  .then((data) => {
    return tallyCubes(data);
  })
  .then((result) => {
    return findPossibleGames(result);
  })
  .then((result) => {
    console.log(result);
  });
