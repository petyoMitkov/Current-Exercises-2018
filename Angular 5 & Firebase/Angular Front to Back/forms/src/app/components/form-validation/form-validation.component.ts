import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-form-validation',
    templateUrl: './form-validation.component.html',
    styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
    user = {
        name: "",
        email: "",
        phone: ""
    }
    onSubmit({value, valid}) {
        if (valid) {
            console.log('valid');
        } else {
            console.log('False');
        }
    }

    constructor() { }

    ngOnInit() {
    }

}
