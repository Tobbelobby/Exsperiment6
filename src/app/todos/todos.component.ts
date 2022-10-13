import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';
import { CrudService } from '../service/crud.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {



  todoArr: any;
  addTodo: FormGroup = new FormGroup({});
  id: any




  constructor(private crudService: CrudService,
    private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {

    this.crudService.getTodo().subscribe(data => {
      this.todoArr = data;

    });

    this.addTodo = this.formBuilder.group({
      "id": new FormControl((new Date()).getTime()),
      "description": new FormControl(""),
      "summary": new FormControl("")
    })

    this.crudService.deleteTodo(this.todoArr[0].id).subscribe(data => {
      console.log("user del")
    }, err => {
      console.log("not del")

    })


  }

  createTodo() {
    this.crudService.addTodo(this.addTodo.value).subscribe(data => {
      console.log("Todo made", this.addTodo.value)
    }, err => {
      console.log("createTodo fail", this.addTodo.value);
    })

  }

  deleteTodo(id: any) {
    this.crudService.deleteTodo(id).subscribe(data => {
      console.log("somthing")
    }, err => {
      console.log(err, "her er id", this.todoArr.id)
      console.log(this.todoArr)
    })
  }



}
