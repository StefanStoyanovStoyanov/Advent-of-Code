const fs = require("fs");

const input = fs.readFileSync("./2023/day4.txt", "utf-8");
const lines = input.split("\n");

function checkWinning(parts) {
    let numbers = parts[0]
        .split(/\s+/)
        .map(Number)
        .filter((num) => num !== 0);
    let winning = parts[1]
        .split(/\s+/)
        .map(Number)
        .filter((num) => num !== 0);
    const correctGuesses = winning.filter((winning) => numbers.includes(winning)).length;

    return correctGuesses;
}

let sum = 0;
let copies = Array(lines.length).fill(0);

for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();

    const cardNumberIndex = line.indexOf(":");
    const lineWithoutCardNumber = line.slice(cardNumberIndex + 1).trim();

    const parts = lineWithoutCardNumber.split("|");
    let matches = checkWinning(parts);

    for (let j = i + 1; j < i + matches + 1; j++) {
        copies[j]++;
    }
}

console.log(copies);

for (let i = 0; i < lines.length; i++) {
    sum += 1 + copies[i];
}

console.log(sum);
