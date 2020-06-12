import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  title: string = '';

  constructor(public todosService: TodosService) {}

  ngOnInit(): void {}

  addTodo(e: Event) {
    e.preventDefault();
    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      completed: false,
      date: new Date(),
    };

    this.todosService.addTodo(todo);
  }
}
