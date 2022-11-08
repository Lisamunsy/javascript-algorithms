let string = process.argv[2];
// let input = string.split(" ");
// console.log(input);
let direction = process.argv[3];
let distance = process.argv[4];

let cipher = ""; 

const letters =["A","B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function encoder(lett, dir, dist) {
    let letterindex = letters.findIndex(element => element == lett);
    let parseDist = parseInt(dist, 10);
    let encoded = letters[dir == "L" ? letterindex - parseDist : letterindex + parseDist <= 25 ? letterindex +parseDist : (parseDist -(25-letterindex)-1)];
    return encoded;
}
for (let i = 0; i < string.length; i++) {
    if (string[i] == " ") {
        cipher += " "
    } else {
        let encodedLetter = encoder(string[i], direction, distance);
        cipher += encodedLetter;
    }
} 

console.log(cipher);