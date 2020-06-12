import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from '../shared/todos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  public addForm: FormGroup;

  constructor(public todosService: TodosService) {}

  ngOnInit(): void {
    this.addForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.addForm.controls[controlName].hasError(errorName);
  };

  addTodo(addFormValue: { title: string }) {
    if (this.addForm.valid) {
      const todo: Todo = {
        title: addFormValue.title,
        id: Date.now(),
        completed: false,
        //date: new Date(),
      };
      this.todosService.addTodo(todo);
      this.addForm.reset();
      // this.addForm.controls.title = ''
    }
  }
}
