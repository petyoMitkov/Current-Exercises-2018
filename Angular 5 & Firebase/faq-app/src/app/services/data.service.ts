import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
    questions: Question[];

    constructor() {
        /* this.questions = [
            {
                text: 'What is your name?',
                answer: 'My name is Petyo.',
                hide: true
            },
            {
                text: 'What is your nafavorite color?',
                answer: 'My favorite color is red.',
                hide: true
            },
            {
                text: 'What is your favorite programming language?',
                answer: 'My favorite programming language is JavaScript.',
                hide: true
            }
        ]; */
    }

    getQuestions() {
        //My solution
        this.questions = [];
        let localData = JSON.parse(localStorage.getItem('questions'));
        this.questions = localData;
        console.log(this.questions.length);

        return this.questions;
    }

    addQuestion(question: Question) {
        this.questions.unshift(question);
        localStorage.setItem('questions', JSON.stringify(this.questions));
    }

    removeQuestion(question) {
        for (let i = 0; i < this.questions.length; i++) {
            if (question == this.questions[i]) {
                this.questions.splice(i, 1);
                localStorage.setItem('questions', JSON.stringify(this.questions));
            }
        }
        if (this.questions.length === 0) {
            $("#noQuestionInStorage").fadeIn();
        }
    }

}
