import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Question } from '../../models/Question';

@Component({
    selector: 'app-add-question',
    templateUrl: './add-question.component.html',
    styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
    @Output() questionAdded = new EventEmitter<Question>();
    text:string = "";
    answer:string = "";
    userForm: FormGroup;

    constructor(private _fb: FormBuilder) {

    }

    ngOnInit() {
    }

    createFormValidation() {
        this.userForm = this._fb.group({
            "question": ["",Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(40),
                Validators.pattern("[A-Z]+[a-zA-Z0-9]*")
            ])],
            "answer": ["", Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(200),
                Validators.pattern("[A-Z]+[a-zA-Z0-9]*")
            ])],
            "city": [" ", Validators.minLength(3)]
        });
    }

    addQuestion() {
        if(this.text == "" || this.answer == "") {
            alert("There is empty field!");

        } else {
            this.questionAdded.emit({text:this.text, answer:this.answer, hide:true});
            this.text = "";
            this.answer="";
        }


    }

}

function emailDomainValidator(control : FormControl) {
    let email = control.value;
    if (email && email.indexOf("@") != -1) {
        let [_, domain] = email.split("@");
        let lastPart = domain.split(".");
        if (lastPart[1] !== "com") {
            return {
                emailDomain: {
                    parsedDomain: domain
                }
            }
        }
        return null;
    }
}
