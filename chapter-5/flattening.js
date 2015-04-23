var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(flattened, original) {
  return flattened.concat(original);
}, []));


// → [1, 2, 3, 4, 5, 6]
