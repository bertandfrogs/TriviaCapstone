import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean = false;
  userName: '';
  constructor(public afAuth: AngularFireAuth, private router: Router) {}

  signInPopupGoogle() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  signOut() {
    this.afAuth.auth.signOut().then(data => {
      this.userName = '';
      this.loggedIn = false;
      //this.router.navigate(['welcomePage']);
    });
  }
}
