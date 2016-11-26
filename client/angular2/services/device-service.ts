import {DEVICES} from './mock-devices';
import {Injectable} from 'angular2/core';

@Injectable()
export class DeviceService {
    getDevices() {
        return Promise.resolve(DEVICES);
    }

    getDevice(id: string) {
        return Promise.resolve(DEVICES)
            .then(devices =>
                devices.filter(device =>
                device.id === id
                )[0]
            );
    }
}
