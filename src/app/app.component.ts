import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  welcomeMessage = "Please Login";
  loggedIn = false;

  constructor(private authService: AuthService){};

  ngOnInit(){
    if(this.authService.welcomeMessage != "Please Login"){
      this.welcomeMessage = this.authService.userName;
    }
    if(this.authService.loggedIn === true){
      this.loggedIn = true;
    }
  }
}
