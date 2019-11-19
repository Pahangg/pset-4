const readlineSync = require("readline-sync");

let Number = 0;

console.log("")
do {
     integer = Number(readlineSync.question("Positive integer: "));
} while (integer < 1 || integer > Number.MAX_SAFE_INTEGER || Number.isNaN(integer) || !Number.isInteger(integer));
