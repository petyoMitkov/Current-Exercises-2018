import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
    questions:Question[];

    constructor() {
        this.questions = [
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
        ];
    }

    getQuestions() {
        return this.questions;
    }

}
