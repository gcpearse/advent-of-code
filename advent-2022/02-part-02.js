const fs = require('fs/promises');
const { tallyRounds } = require('./utils/02-utils');

function getStrategyData() {
  return fs.readFile(`${__dirname}/data/strategy-guide.txt`)
    .then((data) => {
      return data.toString().split('\n');
    });
}

function getScore(tally) {
  let score = 0;
  for (let key in tally) {
    if (key === 'B X') score += 1 * tally[key];
    if (key === 'C X') score += 2 * tally[key];
    if (key === 'A X') score += 3 * tally[key];
    if (key === 'A Y') score += 4 * tally[key];
    if (key === 'B Y') score += 5 * tally[key];
    if (key === 'C Y') score += 6 * tally[key];
    if (key === 'C Z') score += 7 * tally[key];
    if (key === 'A Z') score += 8 * tally[key];
    if (key === 'B Z') score += 9 * tally[key];
  }
  return score;
}

getStrategyData()
  .then((data) => {
    return tallyRounds(data);
  })
  .then((result) => {
    return getScore(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
