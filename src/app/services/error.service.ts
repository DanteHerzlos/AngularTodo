import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  error = ''

  set(message: string){
    this.error = message
  }

  clear(){
    this.error = ''
  }
}
