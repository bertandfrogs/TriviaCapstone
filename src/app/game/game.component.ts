import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import {Data} from '../services/data';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  data: Data;
  questions = [];
  correctAnswers = [];
  incorrectAnswers = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getData();
    console.log(this.questions);
    console.log(this.correctAnswers);
    console.log(this.incorrectAnswers);
  }

  getData(){
    this.apiService.getData('').subscribe(data => {
      console.log(data);
      this.data = data;
      for(let i = 0; i < 10; i++){
        this.questions.push(data.results[i].question);
        this.correctAnswers.push(data.results[i].correct_answer);
        this.incorrectAnswers.push(data.results[i].incorrect_answers);
      }
    });
  }

}
