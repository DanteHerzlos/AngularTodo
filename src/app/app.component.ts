import { Component, HostListener, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  constructor(public todoService: TodoService) {}
  ngOnInit(): void {
    this.todoService.get()
  }
  title = 'angular todo list';

  @HostListener('window:keydown', ['$event'])
  handleKeyDown() {
    const input = document.querySelector('#todoInput') as HTMLElement;
    input.focus();
  }
}
