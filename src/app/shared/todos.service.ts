import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { Todo } from '../todo.interface';

@Injectable({ providedIn: 'root' })
export class TodosService {
  public todos: Todo[] = [];
  private url: string = 'https://jsonplaceholder.typicode.com';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };

  constructor(private http: HttpClient) {}

  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.url}/todos/?_limit=5`).pipe(
      tap((todos) => (this.todos = todos)),
      catchError(this.handleError)
    );
  }

  onToggle(id: number) {
    const idx: number = this.todos.findIndex((t) => t.id === id);
    this.todos[idx].completed = !this.todos[idx].completed;
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }

  addTodo(todo: Todo): Observable<Todo> {
    console.log('Adding...');
    // fake post
    return this.http
      .post<Todo>(`${this.url}/posts`, todo, this.httpOptions)
      .pipe(
        map((res) => {
          console.log('Added!');
          this.todos.push(todo);
          return res;
        }),
        catchError(this.handleError)
      );
  }

  editTodo(id: number, title: string) {
    const idx: number = this.todos.findIndex((t) => t.id === id);
    this.todos[idx].title = title;
  }

  private handleError(error: HttpErrorResponse) {
    /*if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    })*/
    return throwError('Error status: ' + error.status);
  }
}
