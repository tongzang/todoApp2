import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user = {};

  constructor(public af: AngularFire, private router: Router) {
    this.af.auth.subscribe(user => {
      if (user) {
        this.user = user;
      }
      else {
        this.user = {};
        this.router.navigate(['/']);
      }

    });
  }

  ngOnInit() {
  }

}
