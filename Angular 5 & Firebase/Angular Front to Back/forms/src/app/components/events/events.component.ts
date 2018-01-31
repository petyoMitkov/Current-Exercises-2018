import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
    result = "No events yet"
    eventFunc(text) {
        console.log(text);
        this.result = text;
    }


    constructor() { }

    ngOnInit() {
    }

}
