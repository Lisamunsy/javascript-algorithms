let string = process.argv[2];
let direction = process.argv[3];
let distance = process.argv[4];
let cipher = ""; 

const letters =["A","B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function encoder(lett, dir, dist) {
    let letterindex = letters.findIndex(element => element == lett);
    let parseDist = parseInt(dist, 10);
    let newLetterIndex = 0;

    if (dir == "L") {
        newLetterIndex = letterindex - parseDist;
        if (newLetterIndex <0) {
            let tmp = 25 + newLetterIndex +1
            newLetterIndex = tmp;
        }
    } else {
        newLetterIndex = letterindex + parseDist;
        if (newLetterIndex >= 25) {
            newLetterIndex = parseDist - (25-letterindex) -1;
        }
    }

    return letters[newLetterIndex];
}

for (let i = 0; i < string.length; i++) {
    if (string[i] == " ") {
        cipher += " "
    } else {
        cipher += encoder(string[i], direction, distance);
    }
} 

console.log(cipher);