const express = require('express')
var body_parser = require('body-parser')
const axios = require('axios')
const app = express()
const port = 5007
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
const cors = require('cors');
var corsOptions = { origin: true, optionsSuccessStatus: 200 };
app.use(cors(corsOptions));


app.get('/', (req, res) => {
    res.send('Hello World! server 2')
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
