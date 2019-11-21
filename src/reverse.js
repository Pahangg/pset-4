const readlineSync = require("readline-sync");

let value = 0;

console.log();
do {
     value = Number(readlineSync.question("Positive integer: "));
} while (value < Number.MIN_SAFE_INTEGER ||
         value > Number.MAX_SAFE_INTEGER ||
         Number.isNaN(value) ||
         !Number.isInteger(value));

let digits = "";
while (value > 0) {
  const digit = value % 10;
  value = Math.floor(value / 10);

  if(value > 0){
    digits = digits + digit + ", ";
  }else{
    digits = digits + digit + ".";
  }

}

console.log(digits);
