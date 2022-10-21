const string =process.argv[2]; 

const array = string.split(",");

const values =[];

for (let i = 0; i < array.length; i++) {
    const candidate = array[i];
    const number = parseInt(candidate, 10);
    values.push(number);
}

let min =0;
let max =values.length -1;

while (min < max) {
    let actual = values[max];
    values[max] = values[min];
    values[min] = actual;
    min++;
    max--;
}

console.log(values);