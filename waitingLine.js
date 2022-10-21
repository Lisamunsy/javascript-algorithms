const string = process.argv[2];

const firstNames = string.split(",", 10);

let actualState = firstNames;
let lastExited ="";
let newState = [];

for (let i = 0; i < (actualState.length-1); i++) {
    console.log("Actual state = "+actualState);
    lastExited = actualState[0];
    console.log("Last exited = "+lastExited);

    for (let j = 1; j < (actualState.length); j++) {
          newState.push(actualState[j]);
    }
    newState.push("");
    console.log("New state = "+newState);
    actualState=newState;
}