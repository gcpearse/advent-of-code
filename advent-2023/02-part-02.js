const { sliceData, parseGames, tallyCubes } = require("./utils/02-utils");
const { getData } = require("./utils/general-utils");

const path = `${__dirname}/data/game-record.txt`;

function sumCubeSetPowers(tallies) {
  let sumOfPowers = 0;
  for (let tally of tallies) {
    sumOfPowers += (tally.red * tally.green * tally.blue);
  }
  return sumOfPowers;
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
  .then((data) => {
    return sumCubeSetPowers(data);
  })
  .then((result) => {
    console.log(result);
  });
