const fs = require("fs");

const input = fs.readFileSync("./2023/day2.txt", "utf-8");
const lines = input.split("\n");

function calculateCubes(part) {
    const regex = /(\d+) (red|green|blue)/g;
    let match;
    let redCubes = 0;
    let greenCubes = 0;
    let blueCubes = 0;

    while ((match = regex.exec(part)) !== null) {
        const count = parseInt(match[1]);
        const color = match[2];

        switch (color) {
            case "red":
                redCubes += count;
                break;
            case "green":
                greenCubes += count;
                break;
            case "blue":
                blueCubes += count;
                break;
        }
    }

    return { redCubes, greenCubes, blueCubes };
}

let sum = 0;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    const parts = line.split(";");

    let redCubes, greenCubes, blueCubes;
    let maxRed = 0,
        maxGreen = 0,
        maxBlue = 0;

    for (const part of parts) {
        ({ redCubes, greenCubes, blueCubes } = calculateCubes(part));

        if (maxRed < redCubes) maxRed = redCubes;
        if (maxGreen < greenCubes) maxGreen = greenCubes;
        if (maxBlue < blueCubes) maxBlue = blueCubes;
    }

    sum += maxRed * maxGreen * maxBlue;
}

console.log(sum);
