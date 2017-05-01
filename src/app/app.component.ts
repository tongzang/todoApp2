import { Component } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  user = {};
  checkUrl: any;
  checkPage: boolean;
  constructor(public af: AngularFire, private router: Router) {
    this.checkPage = false;
    router.events.subscribe((val) => {
      // see also 
      this.checkUrl = val.url;

    });

    this.af.auth.subscribe(user => {
      if (user) {
        // user logged in
        this.user = user;
        this.checkPage = true;

        this.router.navigate(['/home']);
      }
      else {
        // user not logged in
        this.user = {};
        this.checkPage = true;
      }
    });
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Facebook
    });
  }



}
