const string =process.argv[2]; 

const array = string.split(",");

const numbers =[];

for (let i = 0; i < array.length; i++) {
    const candidate = array[i];
    const number = parseInt(candidate, 10);
    numbers.push(number);
}

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    const value = numbers[i];
    sum += value;
}

console.log("Sum is equal to " + sum)