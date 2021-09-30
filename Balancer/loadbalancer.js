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

var url_server1 = 'http://localhost:5006/'
var url_server2 = 'http://localhost:5007/'
var url_server3 = 'http://localhost:5008/'
var balance = 0;

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


function get_fecha(){
    var hoy = new Date();
    return hoy.getDate() + "/" + (hoy.getMonth() + 1) + "/" + hoy.getFullYear() 
}

function get_balance(){
	if(balance == 1){
		balance++;
		return url_server1;
	}else if(balance == 2){
		balance++;
		return url_server2;
	}else{
		balance = 1;
		return url_server3;
	}
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
