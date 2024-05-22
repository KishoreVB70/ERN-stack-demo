const express = require('express')
const {readFile} = require('fs')

const app = express();
app.get("/", async(req, res) => {
    readFile("./home.html", "utf8",  (err, data) => {
        if (err) {
            // 500 is server error
            res.status(500).send("Out of order");
        }
        res.send(data);
    })

    // let html = await readFile("./home.html", "utf8");
    // res.send(html);
})

app.listen(process.env.PORT || 3000, () => console.log("local host 3000"));