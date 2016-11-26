const fs = require('fs');

export function writeAfile(data) {
    fs.writeFile('./client/sensorData.json', data, function(err) {
        if(err) {
            return console.error(err);
        }
        console.log('Data written succesfully');
    });
}

export { writeAfile };
