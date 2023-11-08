const fs = require('fs/promises');

function calculateScore() {
  return fs.readFile(`${__dirname}/data/strategy-guide.txt`)
    .then((data) => {
      return data.toString().split('\n');
    })
    .then((rounds) => {
      const tally = {};
      for (let round of rounds) {
        if (!tally[round]) {
          tally[round] = 1;
        } else {
          tally[round]++;
        }
      }
      return tally;
    })
    .then((tally) => {
      let score = 0;
      for (let key in tally) {
        if (key === 'B X') score += 1 * tally[key];
        if (key === 'C Y') score += 2 * tally[key];
        if (key === 'A Z') score += 3 * tally[key];
        if (key === 'A X') score += 4 * tally[key];
        if (key === 'B Y') score += 5 * tally[key];
        if (key === 'C Z') score += 6 * tally[key];
        if (key === 'C X') score += 7 * tally[key];
        if (key === 'A Y') score += 8 * tally[key];
        if (key === 'B Z') score += 9 * tally[key];
      }
      return score;
    });
}

calculateScore()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
