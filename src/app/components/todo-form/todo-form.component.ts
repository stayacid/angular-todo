import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../shared/todos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Todo } from '../../todo.interface';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  public addForm: FormGroup;

  constructor(public todosService: TodosService) {}

  ngOnInit(): void {
    this.genForm();
  }

  genForm() {
    this.addForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
    });
  }

  genId(): number {
    return this.todosService.todos.length > 0
      ? Math.max(...this.todosService.todos.map((todo) => todo.id)) + 1
      : 0;
  }

  addTodo(addFormValue: { title: string }) {
    if (this.addForm.valid) {
      const todo: Todo = {
        userId: 1,
        id: this.genId(),
        title: addFormValue.title,
        completed: false,
        //date: new Date(),
      };
      this.todosService.addTodo(todo).subscribe((todo) => {
        console.log(todo);
      });
      this.addForm.reset();
    }
  }
}
