const readlineSync = require("readline-sync");

let theInteger = 0;
let space = "";
let theSum = 0;

console.log("");

do {
      thePositiveInteger = Number(readlineSync.question("Positive integer: "));
} while (thePositiveInteger < 1 || thePositiveInteger > Number.MAX_SAFE_INTEGER || Number.isNaN(thePositiveInteger) || !Number.isInteger(thePositiveInteger));

while (thePositiveInteger > 0) {

  let value = (thePositiveInteger % 10)
  thePositiveInteger = Math.floor(thePositiveInteger / 10)

  if (value % 2 === 1) {
    theSum = theSum + value;
  } else if (value % 2 === 0){
    continue;
  } else {
    continue;
  }

}

console.log("\n" + theSum + ".\n");
