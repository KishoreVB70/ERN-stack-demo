const {EventEmitter} = require('events');
const express = require('express');
// const {readFile} = require('fs');
const {readFile} = require('fs').promises;

const eventEmitter = new EventEmitter();
const app = express();
app.get("/", () => {
    
})
// The call back is run only after the text file is read
// readFile("./hello.txt", "utf8", (err, data) => {
//     console.log(data);
// })

async function getter() {
    const content = await readFile("./hello.txt", "utf8");
    console.log(content);
}

getter();

console.log("second");
eventEmitter.on("end", () => {
    console.log("wattup broski");
})

eventEmitter.emit("end");