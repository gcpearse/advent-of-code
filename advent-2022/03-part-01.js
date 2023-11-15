const { getData } = require('./utils/general-utils');
const { sumItemPriorities } = require('./utils/03-utils');

const path = `${__dirname}/data/rucksacks.txt`;

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

getData(path)
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
