import { Component } from "angular2/core";
import { Router } from "angular2/router"

@Component({
    selector: 'overview',
    templateUrl: 'components/overview/overview.component.html',
    styleUrls: [''],
    providers: [],
    directives: [],
    pipes: [],
})
export class OverviewComponent {

    constructor(private _router: Router) { }
    
}