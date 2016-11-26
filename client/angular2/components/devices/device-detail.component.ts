import {Component, OnInit} from "angular2/core";
import { RouteParams } from 'angular2/router';

import { Device } from "../../services/device";
import {DeviceService} from "../../services/device-service";
import {d3} from "../app/app.component";
import * as $ from 'jquery';
import {GraphService} from "../../services/graph/graph-service";
import {TranslateService} from "../../services/translate/translate-service";


@Component({
    selector: 'devices',
    templateUrl: 'components/devices/device-detail.component.html',
    styleUrls: ['components/devices/device-detail.component.css'],
    providers: [],
    directives: [],
    pipes: [],
})
export class DeviceDetailComponent implements ngOnChanges{

    device: Device;


    constructor(
        private deviceService: DeviceService,
        private graphService: GraphService,
        private routerParams: RouteParams,
        public translateService: TranslateService
    ) {
        let id = this.routerParams.get('id');
        this.translateService.set_lang("English");
        this.deviceService.getDevice(id)
            .then(device => {
                    this.device = device;
                    this.graphService.graphInit();
                    this.graphService.drawGraph(device.graph, 'Light_lux', '#viz-wrapper-1');
                    this.graphService.drawGraph(device.graph, 'Ambient_temp', '#viz-wrapper-2');
                    this.graphService.drawGraph(device.graph, 'Uptime_sec', '#viz-wrapper-3');
                }
            );
    }

    ngOnChanges () {
        debugger;
    }

    ngOnInit() {
        debugger;

    }
}



