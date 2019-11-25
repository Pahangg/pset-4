const readlineSync = require("readline-sync");

let fibonacci = 0;
let x = 0;

console.log("");

do {
      fibonacci = Number(readlineSync.question("Positive integer: "));
} while (fibonacci < 1 || fibonacci > 78 || Number.isNaN(fibonacci) || !Number.isInteger(fibonacci));

x = (Math.pow(1.618034, fibonacci) - (Math.pow(-0.618034, fibonacci))) / Math.sqrt(5)

if ((x * 10) % 10 < 5) {
  Math.floor(x)
}

if ((x * 10) % 10 >= 5) {
  Math.ceil(x)
}

result = x.toLocaleString('en', {minimumFractionDigits: 0, maximumFractionDigits: 0})

console.log("\n" + result + ".\n");
