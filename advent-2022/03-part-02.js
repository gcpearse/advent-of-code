const fs = require('fs/promises');
const { sumItemPriorities } = require('./utils/03-utils');

function getRucksackData() {
  return fs.readFile(`${__dirname}/data/rucksacks.txt`)
    .then((data) => {
      return data.toString().split('\n');
    });
}

function makeGroupsOfThree(rucksacks) {
  const groups = [];
  while (rucksacks.length > 0) {
    groups.push(rucksacks.splice(0, 3));
  }
  return groups;
}

function findCommonItems(groups) {
  const commonItems = [];
  for (let group of groups) {
    let tempSet = new Set();
    for (let item of group[0].split('')) {
      if (
        group[1].split('').includes(item) &&
        group[2].split('').includes(item)
      ) {
        tempSet.add(item);
      }
    }
    commonItems.push(...tempSet);
  }
  return commonItems;
}

getRucksackData()
  .then((data) => {
    return makeGroupsOfThree(data);
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
