const express = require('express')
var body_parser = require('body-parser')
var mysql = require('mysql2');
const axios = require('axios')
const app = express()
const port = 5006
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
const cors = require('cors');
var corsOptions = { origin: true, optionsSuccessStatus: 200 };
app.use(cors(corsOptions));

var connection = mysql.createConnection({
    host     : 'db',
    user     : 'root',
    password : '1234',
    port: 3306,
   database: 'db_redes'
});
connection.connect();
    

function getConnection(){
    
    connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
        if (err) throw err;
            console.log(rows[0].solution)
      });
}

app.get('/', (req, res) => {
    console.log("server1")
    getConnection()
    res.send("conectado a la db server 1")
})
app.listen(port, () => {
    console.log(`Servidor1: ${port}`)
})