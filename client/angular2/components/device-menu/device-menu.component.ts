import { Component } from "angular2/core";
import { Router } from "angular2/router"
import {DeviceService} from "../../services/device-service";
import {Device} from "../../services/device";

@Component({
    selector: 'device-menu',
    templateUrl: 'components/device-menu/device-menu.component.html',
    styleUrls: [''],
    providers: [],
    directives: [],
    pipes: [],
})
export class DeviceMenuComponent {
    
    devices = [];

    constructor(private _router: Router, public deviceService: DeviceService) { }

    ngOnInit() {
        this.deviceService.getDevices().then(devices => this.devices = devices);
    }

    gotoDetail(device: Device) {
        let link = ['DeviceDetail', { id: device.id}];
        this._router.navigate(link);
    }

}