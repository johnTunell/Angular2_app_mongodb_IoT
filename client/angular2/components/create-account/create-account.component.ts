import { Component } from "angular2/core";
import { Router } from "angular2/router"
import {DeviceService} from "../../services/device-service";
import {Device} from "../../services/device";
import {clientSocket} from "../app/app.component";
import {TranslateService} from "../../services/translate/translate-service";

@Component({
    selector: 'create-account',
    templateUrl: 'components/create-account/create-account.component.html',
    styleUrls: [''],
    providers: [],
    directives: [],
    pipes: [],
})
export class CreateAccountComponent {
    submitted = false;

    constructor(public translateService: TranslateService) { }

    onSubmit(accountForm) {
        console.log(accountForm);
        this.submitted = true;
        clientSocket.emit('add_user', accountForm);
    }

    setLang(target) {
        this.translateService.lang_on_click(target);
    }


}