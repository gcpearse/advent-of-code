exports.tallyRounds = (rounds) => {
  const tally = {};
  for (let round of rounds) {
    if (!tally[round]) {
      tally[round] = 1;
    } else {
      tally[round]++;
    }
  }
  return tally;
};
