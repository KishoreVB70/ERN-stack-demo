const {EventEmitter} = require('events');
const {readFile, readFileSync} = require('fs');

const eventEmitter = new EventEmitter();

eventEmitter.on("end", () => {
    console.log("wattup broski");
})

eventEmitter.emit("end");
console.log("second");