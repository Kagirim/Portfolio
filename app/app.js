const serveIndex = require('serve-index');
const nStatic = require('node-static');
const { config } = require('dotenv');
const express = require('express');
const path = require('path');

const app = express();
config();

// configure middleware
app.use('/static', express.static(path.join(__dirname, '..', '/public', 'static')));

server.get('/', (req, res) => { res.sendFile(path.join(__dirname, '..', 'public', 'index.html')); });

const PORT = process.env.PORT || 5000;
server.listen(PORT, function () { console.log('server is running'); });