import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() q: any;

  selectedQuestion: boolean = false;
  
  constructor() { }
  
  ngOnInit() {
  }
  
  
  onSelectQuestion() {
    this.selectedQuestion = !this.selectedQuestion;
  }

}
