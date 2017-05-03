import { Component, OnInit } from '@angular/core';

import { QUESTIONS, Question, Answer } from './question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  current: Question;
  currentKey: number;
  total: number;
  previous: boolean = true;
  next: boolean = true;
  submit: boolean = false;
  submited: boolean = false;
  count: object = {
    A: 0,
    B: 0,
    C: 0,
    D: 0
  }

  constructor() {
    this.currentKey = 0;
    this.current = QUESTIONS[this.currentKey];
    this.total = QUESTIONS.length;
  }

  ngOnInit() {}

  onClick(current, answer) {
    current.answer.forEach((item: Answer) => {
      if(item.selected) {
        item.selected = false;
        this.count[item.key]--;
      }
    });
    answer.selected = true;
    this.count[answer.key]++; 
    if((this.currentKey + 1) < this.total) {
      this.next = false; 
    } 
    if((this.currentKey + 1) == this.total) {
      this.submit = true;
    }
  }

  onPrevious() {
    if((this.currentKey - 1) == 0) {
      this.previous = true;
    }
    this.currentKey--;
    this.current = QUESTIONS[this.currentKey];
    this.next = false;
  }

  onNext() {
    this.next = true;
    if((this.currentKey + 1) == this.total) {
      return false;
    }
    this.currentKey++;
    this.current = QUESTIONS[this.currentKey];
    if(this.current.answer.some((item: Answer) => { return item.selected })) {
      this.next = false;
    }
    if(this.currentKey > 0) {
      this.previous = false;
    }
  }

  onSubmit() {
    this.submited = true;
  }

  onRest() {
    window.location.reload();
  }

}
