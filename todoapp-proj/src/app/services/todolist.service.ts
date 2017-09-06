import { Injectable } from '@angular/core';
import { Todo } from './../models/todo';
import { Http } from '@angular/http';
import * as _ from 'lodash';

@Injectable()
export class TodoService {

  private todoList:Todo[]
  firebaseURL:string;
  
  constructor(private http:Http) {
    this.firebaseURL = "https://my-todo-app-43f14.firebaseio.com/myapp.json"
    this.todoList = [];
    this.todoList.push(new Todo('Complete Task',false,'project'));
    this.todoList.push(new Todo('Analysis',false,'project'));
    this.todoList.push(new Todo('Fill timesheets',false,'personal'));
    this.todoList.push(new Todo('Complete Task',false,'project'));
    this.todoList.push(new Todo('catch the Train',false,'personal'));
  }

  getTodoList(){
    this.http.get(this.firebaseURL).subscribe(respData => {
        console.log(respData.json());
        const respObj = respData.json();
        const tempTodoArr = [];
        console.log(_.values(respObj));
        this.todoList = _.values(respObj).map((item: Todo) =>{
           return new Todo(item.name,item.iscompleted,item.type);
        })
    },(err => {
      console.log('Error in fetching data from Firebase',err);
    }))
  }

  getProjectTodos(){
    return this.todoList.filter(todo => todo.type === 'project');
  }

  getPersonalTodos(){
    return this.todoList.filter(todo => todo.type === 'personal');
  }

  addTodo(name:string,type:string,isDone:boolean = false){
    const newTodo = new Todo(name,isDone,type);

    this.http.post(this.firebaseURL,newTodo).subscribe(data => {
    console.log('Success',data);
    this.todoList.push(newTodo);
    console.log(this.todoList);
    },(err => {
      console.log('Error occured',err);
    }))
  }
  
  
}
