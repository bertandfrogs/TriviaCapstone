import { Component, OnInit } from '@angular/core';
import { AuthService} from "../services/auth.service";
import { DatabaseService } from '../services/database.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.scss']
})
export class GameSetupComponent implements OnInit {

  data = [{playerNum: 1}, {numOfQuestions: 10}, {difficulty: "Any"}, {category: "Any"}];

  constructor(private authService: AuthService, private apiService: ApiService) { }

  ngOnInit() {
    console.log(this.authService.userName)
  }

  playerNumber(event) {
    console.log(event.value);
    this.data[0] = {playerNum: event.value};
  }

  questionsPerPlayer(event) {
    console.log(event.value);
    this.data[1] = {numOfQuestions: event.value};
  }

  difficulty(event) {
    console.log(event.value);
    this.data[2] = {difficulty: event.value};
  }

  category(event) {
    console.log(event.value);
    this.data[3] = {category: event.value};
  }

  submitData(){
    console.log(this.data);
    this.createUrl(this.data);
  }

  createUrl(data){
    //https://opentdb.com/api.php?amount=10&category=9&difficulty=easy
    let url = "https://opentdb.com/api.php?";
    let questions = data[0].playerNum * data[1].numOfQuestions;
    url += `amount=${questions}`;
    if(data[3].category !== "Any"){
      url += `&category=${data[3].category}`;
    }
    if(data[2].difficulty !== "Any"){
      url += `&difficulty=${data[2].difficulty}`;
    }
    console.log(url);
    this.apiService.setData(url);
  }
}
