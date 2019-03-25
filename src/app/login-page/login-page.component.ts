import { Component, OnInit } from '@angular/core';
import { AuthService} from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async loginWithGoogle() {
    await this.authService.signInPopupGoogle()
      .then(data => {
        this.authService.saveUserData(data.user.displayName);
      });
    this.router.navigate(['game-setup']);
  }

}
