import { Component, OnInit } from '@angular/core';
import { TodosService } from '../shared/todos.service';

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
    // event.source._value will return all selected items
    // event.option._value will return event.target value
    // event.option._selected will return event.target is cheched or not
    this.todosService.onToggle(event.option._value.id);
  }

  removeTodo(event: Event, id: number) {
    event.stopPropagation();
    this.todosService.removeTodo(id);
  }
}
