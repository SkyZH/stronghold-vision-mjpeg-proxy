const MjpegProxy = require('mjpeg-proxy').MjpegProxy;
const express = require('express');
const config = require('./config');

var app = express();

app.use('/', express.static('../webdashboard'));
app.get('/stream.mjpg', new MjpegProxy(config.mjpeg.proxy).proxyRequest);

app.listen(config.server.port, config.server.host);
