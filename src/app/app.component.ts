import { Component } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  date?: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appTitle = 'Spectacular Angular todo application';

  public todos: Todo[] = [
    { id: 1, title: 'Buy something good', completed: false, date: new Date() },
    { id: 1, title: 'Buy something very good', completed: false, date: new Date(), },
    { id: 1, title: 'Buy beer', completed: true, date: new Date() },
  ];
}
