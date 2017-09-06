import { Injectable } from '@angular/core';
import { Todo } from './../models/todo';
import {Http } from '@angular/http';
@Injectable()
export class Todolist {

  private todoList:Todo[]
  firebaseURL:string;
  
  constructor(private http:Http) {
    this.firebaseURL = "https://my-todo-app-43f14.firebaseio.com/appData.json"
    this.todoList = [];
    this.todoList.push(new Todo('Complete Task',false,'project'));
    this.todoList.push(new Todo('Analysis',false,'project'));
    this.todoList.push(new Todo('Fill timesheets',false,'personal'));
    this.todoList.push(new Todo('Complete Task',false,'project'));
    this.todoList.push(new Todo('catch the Train',false,'personal'));
  }

    getTodoList(){
    return this.todoList;
  }

  getProjectTodos(){
    return this.todoList.filter(todo => todo.type === 'project');
  }

  getPersonalTodos(){
    return this.todoList.filter(todo => todo.type === 'personal');
  }

  addTodo(name:string,type:string,isDone:boolean = false){
    const newTodo = new Todo(name,isDone,type);
    this.todoList.push(newTodo);
    console.log(this.todoList);
  }
}
