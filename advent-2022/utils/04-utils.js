exports.createPairs = (ranges) => {
  return ranges.map(range => range.split(','));
};

exports.createNestedPairs = (pairs) => {
  return pairs.map(pair => {
    return [
      pair[0].split('-'),
      pair[1].split('-')
    ];
  });
};
