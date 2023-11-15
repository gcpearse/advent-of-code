const { getData } = require('./utils/general-utils');
const { createPairs, createNestedPairs } = require('./utils/04-utils');

const path = `${__dirname}/data/section-assignments.txt`;

function sumOverlappingRanges(nestedPairs) {
  let sum = 0;
  nestedPairs.forEach(nestedPair => {
    if (+nestedPair[0][1] < +nestedPair[1][0] || +nestedPair[0][0] > +nestedPair[1][1]) {
      sum += 0;
    } else {
      sum++;
    }
  });
  return sum;
}

getData(path)
  .then((data) => {
    return createPairs(data);
  })
  .then((result) => {
    return createNestedPairs(result);
  })
  .then((result) => {
    return sumOverlappingRanges(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
