const fs = require('fs/promises');
const { createArrayOfArrays, findTotals } = require('./utils/01-utils');

function getCalorieData() {
  return fs.readFile(`${__dirname}/data/elf-calories.txt`)
    .then((data) => {
      return data.toString().split('\n');
    })
}

function findTopThreeTotals(arrayOfTotals) {
    const sortedTotals = arrayOfTotals.sort((a, b) => b - a);
    const topThree = sortedTotals.splice(0, 3);
    return topThree.reduce((a, b) => a + b);
}

getCalorieData()
.then((data) => {
  return createArrayOfArrays(data)
})
.then((result) => {
  return findTotals(result)
})
.then((result) => {
  return findTopThreeTotals(result)
})
.then((result) => {
  console.log(result);
})
.catch((err) => {
  console.log(err);
});
