import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { Data } from '../services/data';
import { AuthService } from '../services/auth.service';
// import { AllHtmlEntities } from '/node_modules/html-entities'

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
  allAnswers = [];

  constructor(private apiService: ApiService, private authService: AuthService) { }

  ngOnInit() {
    this.getData();
    if(this.authService.welcomeMessage !== "Please Login"){
      this.authService.welcomeMessage = "Welcome, " + this.authService.userName;
    }
  }

  getData(){

    this.apiService.getData('').subscribe(data => {
      this.data = data; // he.decode

      for(let i = 0; i < 10; i++) {
        this.questions.push(decodeHtml(data.results[i].question));

        this.correctAnswers.push(decodeHtml(data.results[i].correct_answer));
        this.incorrectAnswers.push((data.results[i].incorrect_answers));

        if(this.correctAnswers[i] === "True" || this.correctAnswers[i] === "False" ) {
          let join = [{question: this.correctAnswers[i], isCorrect: true}, {question: this.incorrectAnswers[i][0], isCorrect: false}];
          this.allAnswers.push(join);
        }
        else{
          let join = [{question: this.correctAnswers[i], isCorrect: true}, {
            question: decodeHtml(this.incorrectAnswers[i][0]),
            isCorrect: false
          }, {question: decodeHtml(this.incorrectAnswers[i][1]), isCorrect: false}, {question: decodeHtml(this.incorrectAnswers[i][2]), isCorrect: false}];
          this.allAnswers.push(join);
        }
      }
      if(this.allAnswers.length==10){
        this.randomize(this.allAnswers);
        console.log(this.allAnswers);
      }
    });

    function decodeHtml(html) {
      let txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    }
  }

  randomize(ary){
    console.log(ary);
    console.log("begin randomize function.");

    let array = ary;
    console.log(array);

    let temp;
    let rand;

    //outer for loop, loops through all the questions.
    for(let question = 0; question < array.length; question++){
      //inner for loop, loops through the answers on the specific question.
      for(let answer = 0; answer < array[question].length; answer++){
        //check if true or false
        if(array[question].length == 2){
          if(array[question][0].question == "True"){

          }else{
            temp = array[question][0];
            array[question][0] = array[question][1];
            array[question][1] = temp;
          }
        }
        else{
          rand = Math.floor(Math.random() * answer);
          temp = array[question][answer];
          array[question][answer] = array[question][rand];
          array[question][rand] = temp;
        }
      }
    }
  }
}
