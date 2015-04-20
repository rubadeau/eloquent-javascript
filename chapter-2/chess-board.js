var grid = 8;

var chess = "";

for (var base = 0; base < grid; base++) {
  for (var height = 0; height < grid; height++) {
    if ((height + base) % 2 === 0)
      chess += " ";
    else
      chess += "#";
  }
  chess += "\n";
}

console.log(chess);



// Output:
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
