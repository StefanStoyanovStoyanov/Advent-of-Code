const fs = require("fs");

const input = fs.readFileSync("./2023/day1.txt", "utf-8");
const arr = input.split("\n").filter(Boolean);

const numberMap = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
};

function isNumber(char) {
    return !isNaN(parseInt(char));
}

function firstNumber(string) {
    let numberIndex = -1;
    let num = 0;
    let stringIndex = -1;
    let str = 0;

    for (let i = 0; i < string.length; i++) {
        if (isNumber(string[i])) {
            numberIndex = i;
            num = parseInt(string[i]);
            break;
        }
    }

    for (let i = 0; i < string.length; i++) {
        for (const key of Object.keys(numberMap)) {
            if (string.startsWith(key, i)) {
                stringIndex = i;
                str = numberMap[key];
                break;
            }
        }
        if (stringIndex != -1) break;
    }

    if (str == 0) return num;
    if (numberIndex < stringIndex) return num;
    else return str;
}

function lastNumber(string) {
    let numberIndex = -1;
    let num = 0;
    let stringIndex = -1;
    let str = 0;

    for (let i = string.length - 1; i >= 0; i--) {
        if (isNumber(string[i])) {
            numberIndex = i;
            num = parseInt(string[i]);
            break;
        }
    }

    for (let i = 0; i < string.length; i++) {
        for (const key of Object.keys(numberMap)) {
            if (string.startsWith(key, i)) {
                stringIndex = i;
                str = numberMap[key];
            }
        }
    }

    if (str == 0) return num;
    if (numberIndex > stringIndex) return num;
    else return str;
}

function calculate(string) {
    let first = firstNumber(string);
    let last = lastNumber(string);
    return first * 10 + last;
}

let count = 0;

for (let i = 0; i < arr.length; i++) {
    count += calculate(arr[i]);
}

console.log(count);
