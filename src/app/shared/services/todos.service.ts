import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { Todo } from '../interfaces/todo.interface';

@Injectable({ providedIn: 'root' })
export class TodosService {
  public todos: Todo[] = [];
  private url: string = 'https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com';
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

  onToggle(id: number): Observable<Todo> {
    const idx: number = this.todos.findIndex((t) => t.id === id);

    return this.http
      .patch<Todo>(
        `${this.url}/posts/${id}`,
        { completed: !this.todos[idx].completed },
        this.httpOptions
      )
      .pipe(
        map((res) => {
          this.todos[idx].completed = !this.todos[idx].completed;
          return res;
        }),
        catchError(this.handleError)
      );
  }

  removeTodo(id: number): Observable<{}> {
    return this.http.delete<Todo>(`${this.url}/posts/${id}`).pipe(
      map((res) => {
        this.todos = this.todos.filter((t) => t.id !== id);
        return res;
      }),
      catchError(this.handleError)
    );
  }

  addTodo(todo: Todo): Observable<Todo> {
    // fake post
    return this.http
      .post<Todo>(`${this.url}/posts`, todo, this.httpOptions)
      .pipe(
        map((res) => {
          this.todos.push(todo);
          return res;
        }),
        catchError(this.handleError)
      );
  }

  editTodo(id: number, title: string) {
    const idx: number = this.todos.findIndex((t) => t.id === id);

    return this.http
      .patch<Todo>(`${this.url}/posts/${id}`, { title }, this.httpOptions)
      .pipe(
        map((res) => {
          this.todos[idx].title = title;
          return res;
        }),
        catchError(this.handleError)
      );
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
