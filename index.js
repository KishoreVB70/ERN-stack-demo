const {EventEmitter} = require('events');
const {readFile} = require('fs');

const eventEmitter = new EventEmitter();

// The call back is run only after the text file is read
readFile("./hello.txt", "utf8", (err, data) => {
    console.log(data);
})

console.log("second");
eventEmitter.on("end", () => {
    console.log("wattup broski");
})

eventEmitter.emit("end");