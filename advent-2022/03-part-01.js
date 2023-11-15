const fs = require('fs/promises');

function getRucksacks() {
  return fs.readFile(`${__dirname}/data/rucksacks.txt`)
    .then((data) => {
      return data.toString().split('\n');
    });
}

function splitRucksacks(rucksacks) {
  const splitRucksacks = [];
  rucksacks.forEach(rucksack => {
    return splitRucksacks.push([
      rucksack.slice(0, rucksack.length / 2),
      rucksack.slice(rucksack.length / 2)
    ]);
  });
  return splitRucksacks;
}

function findCommonItems(splitRucksacks) {
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
}

function sumItemPriorities(commonItems) {
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
}

getRucksacks()
  .then((data) => {
    return splitRucksacks(data);
  })
  .then((splitRucksacks) => {
    return findCommonItems(splitRucksacks);
  })
  .then((commonItems) => {
    return sumItemPriorities(commonItems);
  })
  .then((sum) => {
    console.log(sum);
  })
  .catch((err) => {
    console.log(err);
  });
