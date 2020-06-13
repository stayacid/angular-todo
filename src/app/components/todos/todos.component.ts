import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../shared/todos.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  // props
  // @Input() todos: Todo[] = [];
  // emit event
  // @Output() onToggle = new EventEmitter<number>()
  public loading: boolean = true;

  constructor(public todosService: TodosService) {}

  // hook
  ngOnInit(): void {
    this.todosService.fetchTodos().subscribe(() => {
      this.loading = false;
    });
  }

  // methods
  onChange(event: { option: { _value: { id: number } } }) {
    this.todosService.onToggle(event.option._value.id);
  }

  editTodo(e: Event, id: number) {
    const target = e.target as HTMLInputElement;
    this.todosService.editTodo(id, target.value);
  }

  removeTodo(event: Event, id: number) {
    event.stopPropagation();
    // const dialogRef = this.dialog.open(DialogContentExampleDialog);

    this.todosService.removeTodo(id);
  }
}

