const fs = require('fs/promises');

function countCalories() {
  return fs.readFile(`${__dirname}/data/elf-calories.txt`)
    .then((data) => {
      return data.toString().split('\n');
    })
    .then((entries) => {
      const arrayOfArrays = [];
      let tempArray = [];
      for (let entry of entries) {
        if (entry !== '') {
          tempArray.push(+entry);
        } else {
          arrayOfArrays.push(tempArray);
          tempArray = [];
        }
      }
      return arrayOfArrays;
    })
    .then((arrayOfArrays) => {
      return arrayOfArrays.map(array => {
        return array.reduce((a, b) => a + b);
      });
    })
    .then((arrayOfTotals) => {
      return Math.max(...arrayOfTotals);
    });
}

countCalories()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
