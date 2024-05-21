const {EventEmitter} = require('events');
const {readFile, readFileSync} = require('fs');

const eventEmitter = new EventEmitter();

const txt = readFileSync("./hello.txt", "utf8");

console.log(txt);

readFile("./hello.txt", "utf8", (err, data) => {
    console.log(data);
})

console.log("second");
eventEmitter.on("end", () => {
    console.log("wattup broski");
})

eventEmitter.emit("end");