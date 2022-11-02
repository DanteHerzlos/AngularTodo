import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo';
import * as uuid from 'uuid';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  todoList:ITodo[] = []

  get(){
    const data = localStorage.getItem('data');
    this.todoList = data ? JSON.parse(data): []
  }

  delete(id:string){
    this.todoList = this.todoList.filter(el => el.id !== id)
    this.storageUpdate();
  }

  create(body: string){
    this.todoList.push({ id: uuid.v4(), body, checked: false });
    this.storageUpdate()
  }

  edit(todo: ITodo){
    const index = this.todoList.findIndex(el => el.id === todo.id)
    this.todoList[index] = todo
    this.storageUpdate();
  }

  storageUpdate(){
    localStorage.setItem('data', JSON.stringify(this.todoList));
  }
}
