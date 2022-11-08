const input = process.argv[2];

const array = input.split(",");

const numbers = []; 

for (let i = 0; i < array.length; i++) { 
    const candidate = array[i]; 
    const number =parseInt(candidate, 10);
    numbers.push(number);
};

let numberRepeated = -1;
let sequence = false;

for (let i = 0; i < 3; i++) {
    const tmp = numbers[i];
    let count =1;
    for (let j = i+1; j < 5; j++) {
        if (numbers[j] == tmp) {
            count++;
        }
        if (count >= 3) {
            numberRepeated = tmp;
            break;
        }
    }
    count =1;
    if (numbers[i+1] == tmp && numbers[i+2] == tmp) {
        sequence = true;
    }
};

if (sequence == true) {
    console.log(`The number ${numberRepeated} appears 3 times in a row.`);
} else if (numberRepeated != -1) {
    console.log(`The number ${numberRepeated} appears 3 times.`);
} else {
    console.log("No number appears 3 times");
};