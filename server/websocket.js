
import { server } from '../app-compiled';
import { appClient } from './iot_application-compiled';
import { dbClient } from './influxdb-compiled';
import { writeAfile } from './createDataDump-compiled';
import { mongoClient } from './mongodb-compiled';

function socketSetup() {


// Socket configuration

    const serverSocket = require('socket.io')(server);
    serverSocket.on('connection', function(clientConSock) {
        console.log("A client connected");

        clientConSock.on('req_data', function() {

            var query = 'SHOW TAG VALUES FROM "Devices" WITH KEY = "Device_Id"';

            dbClient.query(query, function(err, results) {
                clientConSock.emit('res_data', results);
            });
        });

        clientConSock.on('req_data_device', function(device) {
            var query = "select * " +
                "from Devices " +
                "where time > '2016-05-23' and Device_Id = '" + device + "'";
            console.log(query);
            dbClient.query(query, function(err, results) {
                clientConSock.emit('res_query', results, device);
                //    writeAfile(JSON.stringify(results));
            });
        })

        clientConSock.on('add_user', function(userInfo) {
            console.log(userInfo);
            mongoClient.userCollection.insert(userInfo);
        });

        clientConSock.on('try_login', (loginInfo) => {
            mongoClient.userCollection.findOne({"username": loginInfo.username, "password": loginInfo.password }, (err, res) => {
               if(res) {
                   clientConSock.emit('login_successful');
               } else {
                   clientConSock.emit('login_failed');
               }
            });

        })

    });
}

export { socketSetup };