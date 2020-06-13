import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Todo } from '../todo.interface';

@Injectable({ providedIn: 'root' })
export class TodosService {
  public todos: Todo[] = [];

  constructor(private http: HttpClient) {}

  fetchTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos/?_limit=5')
      .pipe(tap((todos) => (this.todos = todos)));
  }

  onToggle(id: number) {
    const idx: number = this.todos.findIndex((t) => t.id === id);
    this.todos[idx].completed = !this.todos[idx].completed;
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  editTodo(id: number, title: string) {
    const idx: number = this.todos.findIndex((t) => t.id === id);
    this.todos[idx].title = title;
    console.log(this.todos);
  }
}
