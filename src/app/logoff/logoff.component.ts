import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoff',
  templateUrl: './logoff.component.html',
  styleUrls: ['./logoff.component.scss']
})
export class LogoffComponent implements OnInit {

  constructor(public af: AngularFire, private router: Router) { }

  ngOnInit() {
    this.logout();
  }
  logout() {
    this.af.auth.logout();
    this.router.navigate(['/']);
  }
}
