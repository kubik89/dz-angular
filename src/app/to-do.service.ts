import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {todolist} from './todo.models';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private myHttp: HttpClient) { }
  getToDoList(): Observable<todolist[]>{
    return this.myHttp.get<todolist[]>('https://jsonplaceholder.typicode.com/todos');
  }

}
