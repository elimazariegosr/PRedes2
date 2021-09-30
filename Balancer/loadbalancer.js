const express = require('express')
var body_parser = require('body-parser')
const axios = require('axios')
const app = express()
const port = 5005
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
const cors = require('cors');
var corsOptions = { origin: true, optionsSuccessStatus: 200 };
app.use(cors(corsOptions));

var servers = ['http://172.35.71.7:5006/','http://172.35.71.8:5007/','http://10.10.11.3:5008/']
app.get('/', (req, res) => {
    let body = req.body
	axios.get(get_balance(), body).then(function (x) {
        res.send(x.data)
    })
})

app.post('/', (req, res) => {
	
	let body = req.body
    axios.post(get_balance(), body).then(function (x) {
        res.send(x.data)
    })
})

function get_balance() {
	return  servers[(Math.floor(Math.random() * (4 - 1)) + 1)-1];
  }

app.listen(port, () => {
    console.log(`Example app listening at http://balancer:${port}`)
})
