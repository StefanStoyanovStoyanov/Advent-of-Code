const fs = require("fs");

const input = fs.readFileSync("./2023/day3.txt", "utf-8");
const arr = input
    .trim()
    .split("\n")
    .map((line) => [".", ...line.trim().split(""), "."]);

const paddingRow = Array(arr[0].length).fill(".");

arr.unshift(paddingRow);
arr.push(paddingRow);

console.log(arr.map((row) => row.join("")).join("\n"));

let sum = 0;

function findNumbers(arr) {
    let numbers = [];

    for (let row = 0; row < arr.length; row++) {
        let col = 0;

        while (col < arr[row].length) {
            let numberStr = "";

            while (col < arr[row].length && arr[row][col] >= "0" && arr[row][col] <= "9") {
                numberStr += arr[row][col];
                col++;
            }

            if (numberStr.length > 0) {
                let value = parseInt(numberStr, 10);

                numbers.push({
                    value: value,
                    row: row,
                    col: col - numberStr.length,
                    length: numberStr.length,
                });
            }

            col++;
        }
    }

    return numbers;
}

let numbers = findNumbers(arr);

function check(number, arr) {
    let row = number.row;
    let col = number.col;
    let length = number.length;

    if (arr[row][col - 1] !== "." || arr[row][col + length] !== ".") return false;

    for (let i = col - 1; i <= col + length; i++) {
        if (arr[row + 1][i] !== "." || arr[row - 1][i] !== ".") return false;
    }

    return true;
}

numbers = numbers.filter((number) => !check(number, arr));

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i].value;
}

console.log(numbers);
console.log(sum);
