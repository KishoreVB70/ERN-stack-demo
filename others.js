// const {readFile} = require('fs');
const {EventEmitter} = require('events');
const eventEmitter = new EventEmitter();
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