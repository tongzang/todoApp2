import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { LogoffComponent } from './logoff/logoff.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'logoff', component: LogoffComponent },

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);