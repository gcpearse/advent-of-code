const fs = require('fs/promises');
const { sumItemPriorities } = require('./utils/03-utils');

function getRucksackData() {
  return fs.readFile(`${__dirname}/data/rucksacks.txt`)
    .then((data) => {
      return data.toString().split('\n');
    });
}

function splitRucksacks(rucksacks) {
  const rucksackHalves = [];
  rucksacks.forEach(rucksack => {
    return rucksackHalves.push([
      rucksack.slice(0, rucksack.length / 2),
      rucksack.slice(rucksack.length / 2)
    ]);
  });
  return rucksackHalves;
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

getRucksackData()
  .then((data) => {
    return splitRucksacks(data);
  })
  .then((result) => {
    return findCommonItems(result);
  })
  .then((result) => {
    return sumItemPriorities(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
