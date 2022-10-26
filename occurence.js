const input = process.argv[2];

const array = input.split(",", 10);

const numbers = []; 

for (let i = 0; i < array.length; i++) { 
    const candidate = array[i]; 
    const number =parseInt(candidate, 10);
    numbers.push(number);
}; //dans la correction on ne transforme pas en array de nombres et cela sera pratique quand on va comparer numberRepeated avec 0

let numberRepeated =0;
let combo = false;
for (let i = 0; i < 5; i++) {
    let tmp = 0;
    for (let j = 0; j < 5; j++) {
        if (numbers[i] == numbers[j] && (numbers[j] == numbers[j-1] && numbers[j] == numbers[j+1])) {
            tmp++;
            combo = true;
        } else if (numbers[i] == numbers[j]) {
            tmp++;
        };
        if (tmp>= 3) {
            numberRepeated = numbers[i];
        };
    } ; 
}
if (numberRepeated != 0 && combo) {
    console.log(`Le nombre ${numberRepeated} apparait 3 fois de suite.`); // template litteral
} else if (numberRepeated !=0 ) {
    console.log(`Le nombre ${numberRepeated} apparait 3 fois`);
} else {
    console.log("Aucun nombre n'apparait 3 fois.");
};