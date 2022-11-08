const string = process.argv[2];

const firstNames = string.split(",");

let actualState = firstNames;

for (let i = 0; i < (actualState.length); i++) {
    console.log("Actual state = "+actualState);
    let lastExited = actualState[0];
    console.log("Last exited = "+lastExited);
    let newState = [];

    for (let j = 1; j < (actualState.length); j++) {
        let tmp = actualState[j];
          newState.push(tmp);
    }
    newState.push("");
    console.log("New state = "+newState);
    actualState=newState;
}