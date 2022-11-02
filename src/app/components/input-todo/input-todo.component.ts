import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorService } from 'src/app/services/error.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-input-todo',
  templateUrl: './input-todo.component.html',
  styleUrls: ['./input-todo.component.sass'],
})
export class InputTodoComponent implements OnInit {
  constructor(
    private todoService: TodoService,
    private errorService: ErrorService
  ) {}

  form = new FormGroup({
    body: new FormControl<string>('', [Validators.required]),
  });

  ngOnInit(): void {}
  get body() {
    return this.form.get('body');
  }

  submit() {
    if (this.body?.errors !== null) {
      this.errorService.set('Todo can`t be empty!');
    } else {
      this.todoService.create(this.form.value.body as string);
      this.form.reset();
      this.errorService.clear()
    }
  }
}
