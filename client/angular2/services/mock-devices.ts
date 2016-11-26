import {Device} from './device';
import {clientSocket} from "../components/app/app.component";

export var DEVICES: Device[] = [];

var test : Device;
var lengthDevices = 0;

clientSocket.on('res_data', function(devices) {

    for(let i = 0; i < devices[0].length; i++) {
        test = {
            id: devices[0][i].value,
            type: devices[0][i].key,
            graph: ''
        }
        clientSocket.emit('req_data_device', devices[0][i].value);
        DEVICES.push(test);
        lengthDevices++;
    }
});

clientSocket.on('res_query', function(data, device) {
    for(let i = 0; i < DEVICES.length; i++) {
        if(DEVICES[i].id === device) {
            DEVICES[i].graph = data[0];
        }
    }
});

