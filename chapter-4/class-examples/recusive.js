// Palendrom Problem - Recursive

var isPalendrome = function(string) {
  if (string.length >= 0) {
    if (string[0] === string[string.length -1]) {
      newString = string.slice(1, -1);
      return isPalendrome(newString);
    }
    else {
      return false;
    }
  }
  return true;
};

console.log(isPalendrome('racecar'));



// string.slice[1, string.length -1]
