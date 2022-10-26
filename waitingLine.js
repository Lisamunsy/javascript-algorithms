const string = process.argv[2];

const firstNames = string.split(",", 10);

let actualState = firstNames;
let lastExited ="";
let newState = [];

for (let i = 0; i < (actualState.length); i++) {
    console.log("Actual state = "+actualState);
    lastExited = actualState[0];
    console.log("Last exited = "+lastExited);

    for (let j = 0; j < (actualState.length -1); j++) {
        console.log
          newState.push(actualState[j+1]);
    }
    newState.push("");
    console.log("New state = "+newState);
    actualState=newState;
}