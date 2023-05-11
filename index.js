const express = require('express');a
const app = express();

app.get('/', function(req, res) {
    res.send('Hello, world!');
});

const server = app.listen(3000, function() {
    console.log('App listening on port 3000!');
});

module.exports = server;
