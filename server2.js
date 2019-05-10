//Load express module with `require` directive
var express = require('express')
var app = express()
var fs = require("fs");

app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
        var users = JSON.parse( data );
        var user = users["user" + req.params.id]
        console.log( user );
        res.end( JSON.stringify(user));
    });
})

//Launch listening server on port 8081
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})