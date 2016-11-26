import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {clientSocket} from "../app/app.component";
import {TranslateService} from "../../services/translate/translate-service";
import {DeviceService} from "../../services/device-service";
import {Device} from "../../services/device";

@Component({
    selector: "login",
    templateUrl: "components/login/login.component.html",
    styleUrls: [''],
    providers: [],
    directives: [],
    pipes: [],
})
export class LoginComponent {
    isLoggedIn = false;
    devices = [];

    constructor(private _router : Router, public translateService: TranslateService,  public deviceService: DeviceService) { }

    onSubmit(loginInfo) {
        console.log(loginInfo);
        clientSocket.emit('try_login', loginInfo);
    }

    gotoDetail() {
        let device = this.devices[0];
        debugger;
        let link = ['DeviceDetail', { id: device.id}];
        this._router.navigate(link);
    }

    gotoCreateAcc() {
        let link = ['CreateAccount'];
        this._router.navigate(link);
    }
    
    setLang(target) {
        this.translateService.lang_on_click(target);
    }

    ngOnInit() {
        this.translateService.set_lang("Svenska");
        this.deviceService.getDevices().then(devices => this.devices = devices);

        clientSocket.on('login_successful', () => {
            console.log('prov')
            this.gotoDetail()
        });

        clientSocket.on('login_failed', () => {
            console.log('prova')
            alert('login failed');
        });
    }
}
