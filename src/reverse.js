const readlineSync = require("readline-sync");

let integer = 0;
let space = "";

console.log("");

do {
      integer = Number(readlineSync.question("Positive integer: "));
} while (integer < 1 || integer > Number.MAX_SAFE_INTEGER || Number.isNaN(integer) || !Number.isInteger(integer));

while (integer > 0) {

  let value = (integer % 10)
  integer = Math.floor(integer / 10)

  if (integer > 0) {
    space = space + value + ", " ;
  } else {
    space = space + value ;
  }

}

console.log("\n" + space + ".\n");
