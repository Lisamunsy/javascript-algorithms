const string = process.argv[2];
const  numbers = [];
let tmp = "";

for (let i = 0; i < string.length; i++) {
    const candidate = string[i];
    if (candidate != ",") {
        tmp += candidate;
    } else {
        numbers.push(tmp);
        tmp ="";
    }
}

numbers.push(tmp);
console.table(numbers);