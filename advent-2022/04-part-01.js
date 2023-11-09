const fs = require('fs/promises');

function countOverlappingRanges() {
  return fs.readFile(`${__dirname}/data/section-assignments.txt`)
    .then((data) => {
      return data.toString().split('\n');
    })
    .then((ranges) => {
      return ranges.map(range => range.split(','));
    })
    .then((pairs) => {
      return pairs.map(pair => {
        return [
          pair[0].split('-'),
          pair[1].split('-')
        ];
      });
    })
    .then((nestedPairs) => {
      let sum = 0;
      nestedPairs.forEach(nestedPair => {
        if (
          (+nestedPair[0][0] <= +nestedPair[1][0] && +nestedPair[0][1] >= +nestedPair[1][1]) ||
          (+nestedPair[0][0] >= +nestedPair[1][0] && +nestedPair[0][1] <= +nestedPair[1][1])
        ) {
          sum++;
        }
      });
      return sum;
    });
}

countOverlappingRanges()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
