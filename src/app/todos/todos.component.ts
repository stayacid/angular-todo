import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../app.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  // props
  @Input() todos: Todo[] = [];

  constructor() {}

  // hook
  ngOnInit(): void {}
}
