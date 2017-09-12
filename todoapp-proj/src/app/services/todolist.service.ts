import { Injectable } from '@angular/core';
import { Todo } from './../models/todo';
import { Http } from '@angular/http';
import { DatePipe } from '@angular/common';

import * as _ from 'lodash';

@Injectable()
export class TodoService {

  private todoList:Todo[]
  firebaseURL:string;
  
  constructor(private http:Http) {
    this.firebaseURL = "https://my-todo-app-43f14.firebaseio.com/myapp"
    this.todoList = [];
    this.getTodoList();
   // this.todoList.push(new Todo('Complete Task',false,'project'));
    //this.todoList.push(new Todo('Analysis',false,'project'));
    //this.todoList.push(new Todo('Fill timesheets',false,'personal'));
    //this.todoList.push(new Todo('Complete Task',false,'project'));
    //this.todoList.push(new Todo('catch the Train',false,'personal'));
  }

  getTodoList(){
    this.http.get(this.firebaseURL+'.json').subscribe(respData => {
        console.log(respData.json());
        const respObj = respData.json();
        const tempTodoArr = [];
        console.log(_.values(respObj));
        this.todoList =Object.keys(respObj)
        .map(key => {
          let obj = respObj[key];
           return new Todo(key,obj.name,obj.iscomplete,obj.type,obj.startDt,obj.endDt);
        })
    },(err => {
      console.log('Error in fetching data from Firebase',err);
    }))
  }

  getProjectTodos(){
    return this.todoList.filter(todo => todo.type === 'project' && !todo.iscomplete);
  }

  getPersonalTodos(){
    return this.todoList.filter(todo => todo.type === 'personal' && !todo.iscomplete);
  }

  getArchivedTodos(){
    return this.todoList.filter(todo => todo.iscomplete);
  }

  addTodo(name:string,type:string,isDone:boolean = false){
    
    const newTodo = new Todo('',name,isDone,type,Date.now());

    this.http.post(this.firebaseURL+ '.json',newTodo).subscribe(data => {
    console.log('Success',data);
    newTodo.id = data.json().name;
    this.todoList.push(newTodo);
    console.log("Added Item:" +this.todoList);
    },(err => {
      console.log('Error occured',err);
    }))
  }

  markItemAsCompleted(id:string){
    let todoObj = this.fetchTodoforId(id);
    todoObj.iscomplete = true;
    todoObj.endDt = Date.now();
     this.http.put(`${this.firebaseURL}/${id}.json`,todoObj).subscribe(res => console.log(res));
  }

  markItemAsInCompleted(id:string){
    let todoObj = this.fetchTodoforId(id);
    todoObj.iscomplete = false;
    todoObj.startDt = Date.now();
    todoObj.endDt = null;
     console.log("Undo Item:" +todoObj);
    this.http.put(`${this.firebaseURL}/${id}.json`,todoObj).subscribe(res => console.log(res));
  }
  
  fetchTodoforId(id:string){
    return this.todoList.find(todo => todo.id === id)

  }

   markItemAsDeleted(id:string){
    console.log("mark as deteleted"+id)
    let todoObj = this.fetchTodoforId(id);
    this.http.delete(`${this.firebaseURL}/${id}.json`,todoObj).subscribe(res => console.log(res));
  }
 
  
  
}
