const string =process.argv[2]; 

const pingsAndPongs = string.split(",");
let pings =0;
let pongs =0;

for (let i = 0; i < pingsAndPongs.length; i++) {
    if (pingsAndPongs[i] == "ping" ) {
        pings++
    } else {
        pongs++
    } ; 
}

console.log("Match result ping vs pong : " + pings + "-" + pongs)