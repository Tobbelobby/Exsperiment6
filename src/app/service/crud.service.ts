import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  url: string = "http://localhost:8080/todos";

  constructor(private http: HttpClient) {
  }

  addTodo(todoObj: any) {
    return this.http.post(this.url, todoObj)
  }

  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  deleteTodo(id: any) {
    return this.http.delete(this.url + "/" + id)
  }

}
