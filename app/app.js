const express = require('express');
const serveIndex = require('serve-index');
const nStatic = require('node-static');

const server = express();

const path = require('path');

// configure middleware
server.use('/static', express.static(path.join(__dirname, '..', '/public', 'static')));
server.use('/static', serveIndex(path.join(__dirname, '..', '/public', 'static')));

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

server.listen(5000, function () {
    console.log('server is running');
});