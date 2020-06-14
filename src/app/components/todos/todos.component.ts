import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../shared/todos.service';
import { SnackService } from '../../shared/snackbar.service';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(
    public todosService: TodosService,
    private dialog: MatDialog,
    private snackService: SnackService
  ) {}

  // hook
  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos() {
    this.todosService.fetchTodos().subscribe(() => {
      this.loading = false;
    });
  }

  // methods
  onToggle(event: {
    option: {
      _element: {
        nativeElement: { id: string };
      };
    };
  }) {
    this.snackService.openSnackBar('Changing...');
    this.todosService
      .onToggle(parseInt(event.option._element.nativeElement.id, 10)) // have no time to find more simple way
      .subscribe(
        (todo) => this.snackService.openSnackBar('Changed!', 2000),
        (err) => this.snackService.openSnackBar("Can't change :(", 2000)
      );
  }

  editTodo(e: Event, id: number) {
    const target = e.target as HTMLInputElement;
    this.todosService.editTodo(id, target.value);
  }

  removeTodo(event: Event, id: number) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      result ? this.todosService.removeTodo(id) : false;
    });
  }
}

@Component({
  selector: 'dialog-delete-todo',
  templateUrl: '../dialog.html',
})
export class DialogComponent {}
