//Load express module with `require` directive
var express = require('express')
var app = express()
var fs = require("fs");

app.get('/users', function (req, res) {
    fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
})

//Launch listening server on port 8081
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})