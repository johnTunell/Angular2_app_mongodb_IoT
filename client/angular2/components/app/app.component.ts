import {Component}        from "angular2/core";
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from "angular2/router";

import * as test from 'd3';
export var d3 = test;

import * as io from 'socket.io-client';
export var clientSocket = io.connect('');
export var deviceArray;
clientSocket.emit('req_data');
clientSocket.on('res_data', function(devices) {
  console.log(devices);
  deviceArray = devices;
});

import {DeviceDetailComponent} from "../devices/device-detail.component.ts";
import {DeviceMenuComponent} from "../device-menu/device-menu.component";
import {OverviewComponent} from "../overview/overview.component";
import {DeviceService} from "../../services/device-service";
import {LoginComponent} from "../login/login.component";
import {CreateAccountComponent} from "../create-account/create-account.component";

import * as $ from 'jquery';
import {GraphService} from "../../services/graph/graph-service";
import {TranslateService} from "../../services/translate/translate-service";
import {HelpsystemService} from "../../services/helpsystem/helpsystem-service";


@Component({
  selector: 'my-app',
  templateUrl: 'components/app/my-app.html',
  styleUrls: ['components/app/app.component.css'],
  providers: [ROUTER_PROVIDERS, DeviceService, GraphService, TranslateService, HelpsystemService],
  directives: [ROUTER_DIRECTIVES, DeviceMenuComponent, OverviewComponent, LoginComponent],
  pipes: [],
})

@RouteConfig([
  { path: '/overview',         component: OverviewComponent,        name: 'Overview',},
  { path: '/device/:id',       component: DeviceDetailComponent,    name: 'DeviceDetail'},
  { path: '/',                 component: LoginComponent,           name: 'Login', useAsDefault: true},
  { path: '/create_account',   component: CreateAccountComponent,   name: 'CreateAccount'}
])

export class AppComponent {

  title: string;

  constructor(public translateService: TranslateService, public helpsystemService: HelpsystemService) {
    this.title = 'Tour of heroes';
  }

  /**
   * Toggles the settingfield's visibility
   */

  setLang(target) {
    this.translateService.lang_on_click(target);
  }

  manageMenubar() {
    $("#menufield").toggle(400);

    if($("#listicon").hasClass("rotated")) {
      $("#listicon").removeClass("rotated");
      $("#listicon").addClass("unrotated");
    } else
    {
      $("#listicon").removeClass("unrotated");
      $("#listicon").addClass("rotated");
    }
  }

  /**
   * Toggles the settingfield's visibility
   */
  manageSettingsbar(){
    $("#settingsfield").toggle(400);
  }
  

  ngOnInit() {
    this.translateService.set_lang(this.translateService.getDictionary('English'));
    this.helpsystemService.runHelpSystem();
    debugger;
  }

}



