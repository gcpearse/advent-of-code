exports.sumItemPriorities = (commonItems) => {
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
};
