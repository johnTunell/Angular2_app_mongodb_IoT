import { iotAppSetup } from './server/iot_application-compiled';
import { socketSetup } from './server/websocket-compiled';
import { influxDbSetup } from './server/influxdb-compiled';
import {mongoDbSetup} from "./server/mongodb-compiled";

export const express = require('express');
export const app = express();
export const server = require('http').createServer(app);
export const Client = require('ibmiotf');

iotAppSetup();
socketSetup();
influxDbSetup();
mongoDbSetup();


app.use(express.static(__dirname + '/client/angular2'));

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/client/angular2/index.html');
});

server.listen(process.env.PORT || 5000);

console.log("server is running...");