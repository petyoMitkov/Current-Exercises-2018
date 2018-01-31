import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-form-submi',
	templateUrl: './form-submi.component.html',
	styleUrls: ['./form-submi.component.css']
})
export class FormSubmiComponent implements OnInit {
  name:string = "";
  users:string[] = ['John Doe'];

	onSubmit() {
    console.log(this.name);
    this.users.push(this.name);
    this.name = "";
	}


	constructor() { }

	ngOnInit() {
	}

}
