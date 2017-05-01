import { Component, OnInit } from '@angular/core';
import { Todo } from './shared/todo';
import { AngularFire, FirebaseListObservable, AuthProviders } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoName: string;
  count: number;
  todos: FirebaseListObservable<any[]>;
  todosTemp: any[];

  user: any;

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

    var self = this;
    this.todosTemp = [];
    this.todoName = '';
    this.count = 0;
    this.todos = af.database.list('/todo');
    this.todos.subscribe(queriedItems => {
      this.count = 0;
      this.todosTemp = queriedItems
      this.todosTemp.forEach(function (todo) {
        self.count += todo.status ? 0 : 1;
      })
    });
  }

  ngOnInit() {
  }

  addTodo(): void {
    this.todos.push({ text: this.todoName, status: false, name: this.user.auth.displayName, pic: this.user.auth.photoURL });
    this.todoName = '';
  }
  updateStatus(key: string, status: boolean): void {
    this.todos.update(key, { status: status });
  }

  delete(): void {
    var self = this;

    this.todosTemp.forEach(function (todo, idx) {
      if (todo.status) {
        self.todos.remove(todo.$key);
      }
    });

  }
}
