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
        if (key === 'B X') score += 1 * tally[key]; // ok
        if (key === 'C X') score += 2 * tally[key]; // ok
        if (key === 'A X') score += 3 * tally[key]; // ok
        if (key === 'A Y') score += 4 * tally[key]; // ok
        if (key === 'B Y') score += 5 * tally[key]; // ok
        if (key === 'C Y') score += 6 * tally[key]; // ok
        if (key === 'C Z') score += 7 * tally[key]; // ok
        if (key === 'A Z') score += 8 * tally[key]; // ok
        if (key === 'B Z') score += 9 * tally[key]; // ok
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
