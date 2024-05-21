const {EventEmitter} = require('events');
const {readFile, readFileSync} = require('fs');

const eventEmitter = new EventEmitter();

const txt = readFileSync("./hello.txt", "utf8");

console.log(txt);

eventEmitter.on("end", () => {
    console.log("wattup broski");
})

eventEmitter.emit("end");