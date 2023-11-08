const fs = require('fs/promises');

function sumBadgeValues() {
  return fs.readFile(`${__dirname}/data/rucksacks.txt`)
    .then((data) => {
      return data.toString().split('\n');
    })
    .then((rucksacks) => {
      const groups = [];
      while (rucksacks.length > 0) {
        groups.push(rucksacks.splice(0, 3));
      }
      return groups;
    })
    .then((groups) => {
      const commonItems = [];
      for (let group of groups) {
        let tempSet = new Set();
        for (let item of group[0].split('')) {
          if (group[1].split('').includes(item) && group[2].split('').includes(item)) {
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

sumBadgeValues()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
