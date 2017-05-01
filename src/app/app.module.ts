import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { routing } from './app.routing';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { LogoffComponent } from './logoff/logoff.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyBnwbR0if9pEUMp4zikXOfiIC12fh9Zlh0',
  authDomain: 'tongzang-19e40.firebaseapp.com',
  databaseURL: 'https://tongzang-19e40.firebaseio.com',
  storageBucket: 'tongzang-19e40.appspot.com',
  messagingSenderId: '532765713219'
};

const firebaseAuthConfig = {
  provider: AuthProviders.Facebook,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TodoComponent,
    LogoffComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    routing,
    FlexLayoutModule,
    AngularFireModule.initializeApp(firebaseConfig,firebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
