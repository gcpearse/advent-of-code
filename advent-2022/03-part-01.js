const fs = require('fs/promises');

function sumItemPriorities() {
  return fs.readFile(`${__dirname}/data/rucksacks.txt`)
    .then((data) => {
      return data.toString().split('\n');
    })
    .then((rucksacks) => {
      const splitRucksacks = [];
      rucksacks.forEach(rucksack => {
        return splitRucksacks.push([
          rucksack.slice(0, rucksack.length / 2),
          rucksack.slice(rucksack.length / 2)
        ]);
      });
      return splitRucksacks;
    })
    .then((splitRucksacks) => {
      const commonItems = [];
      for (let splitRucksack of splitRucksacks) {
        let tempSet = new Set();
        for (let item of splitRucksack[0].split('')) {
          if (splitRucksack[1].split('').includes(item)) {
            tempSet.add(item);
          }
        }
        commonItems.push(...tempSet);
      }
      return commonItems;
    })
    .then((commonItems) => {
      let sum = 0;
      for (let item of commonItems) {
        if (item.match(/[a-z]/)) {
          sum += item.charCodeAt() - 96;
        }
        if (item.match(/[A-Z]/)) {
          sum += item.charCodeAt() - 38;
        }
      }
      return sum;
    });
}

sumItemPriorities()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
