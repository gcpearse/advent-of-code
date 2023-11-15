const { getData } = require('./utils/general-utils');
const { sumItemPriorities } = require('./utils/03-utils');

const path = `${__dirname}/data/rucksacks.txt`;

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

getData(path)
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
