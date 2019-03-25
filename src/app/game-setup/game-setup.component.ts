import { Component, OnInit } from '@angular/core';
import { AuthService} from "../services/auth.service";

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.scss']
})
export class GameSetupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    console.log(this.authService.userName)
  }

}
