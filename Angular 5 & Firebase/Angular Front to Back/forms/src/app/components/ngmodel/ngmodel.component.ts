import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ngmodel',
    templateUrl: './ngmodel.component.html',
    styleUrls: ['./ngmodel.component.css']
})
export class NgmodelComponent implements OnInit {
    name:string = '';
    age:number = 0;

    constructor() { }

    ngOnInit() {
    }

}
