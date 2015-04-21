var countChar = function(string, character) {
  var result = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) === character)
      result += 1;
  return result;
}

function countBs(string) {
  return countChar(string, "B");
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
