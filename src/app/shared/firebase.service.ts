import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BaseService {
  static url = 'https://angular-todo-c6252.firebaseio.com/todo';

  constructor(private http: HttpClient) {}

  login(name: string, pass: string) {}
}
