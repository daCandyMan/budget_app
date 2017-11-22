import {Component} from "@angular/core";
import {Location} from "@angular/common";
import * as applicationSettings from "application-settings";

@Component({
    selector: "create",
    templateUrl: "./components/addExpense/addExpense.component.html",
})
export class CreateComponent {

    location: Location;
    firstname: string;
    lastname: string;

    constructor(location: Location) {
        this.location = location;
        this.firstname = "";
        this.lastname = "";
    }

    save() {
        if(this.firstname != "" && this.lastname != "") {
            var person: Array<Object> = JSON.parse(applicationSettings.getString("person", "[]"));
            person.push({firstname: this.firstname, lastname: this.lastname});
            applicationSettings.setString("person", JSON.stringify(person));
            this.location.back();
        }
    }

}