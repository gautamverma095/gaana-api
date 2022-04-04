const express = require('express');
const app = express();

const cors = require('cors');

const importData = require('./data.json');

let port = process.env.PORT || 3000;

app.use(cors({origin: '*'}));

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/songs",(req,res) => {
    res.send(importData);
        })

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

