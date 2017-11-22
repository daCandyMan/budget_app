import {Component} from "@angular/core";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import * as applicationSettings from "application-settings";

@Component({
    selector: "landing",
    templateUrl: "./components/landing/landing.component.html",
})
export class ListComponent {

    router: Router;
    personData: Array<Object>;

    constructor(router: Router, location: Location) {
        this.router = router;
        this.personData = JSON.parse(applicationSettings.getString("person", "[]"));
        location.subscribe((path) => {
            this.personData = JSON.parse(applicationSettings.getString("person", "[]"));
        });
    }

    create() {
        this.router.navigate(["/addExpense"]);
    }

}