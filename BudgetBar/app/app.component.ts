import { Component } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';  

@Component({
    selector: "ns-app",
    template: "<page-router-outlet></page-router-outlet>"
})

export class AppComponent { 
    userBudget = {
        "budget": 100,
        "name": "Patrick",
        "start": "Thursday",
        "remaining_budget": 40,
        "days_remaining": 3,
        "saved_last_month": 120,
        "total_saved": 2000
    };
}
