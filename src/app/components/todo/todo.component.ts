import { Component, Input, OnInit } from '@angular/core';
import { delay, subscribeOn } from 'rxjs';
import { ITodo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {
  @Input() todo!: ITodo;

  constructor(private todoService: TodoService) {
  }

  onDelete = false

  ngOnInit(): void {
  }

  deleteTodo():void {
    this.onDelete = true
    setTimeout(() => {
      this.todoService.delete(this.todo.id);
    },500)
  }

  check():void {
    this.todo.checked = !this.todo.checked
    this.todoService.edit(this.todo)
  }
}
