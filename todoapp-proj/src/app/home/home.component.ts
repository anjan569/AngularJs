import { Todo } from './../models/todo';
import { TodoService } from './../services/todolist.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   //projectTodos: Todo[];
   //personalTodos: Todo[];
  constructor(private todoService:TodoService) { 
     //this.projectTodos = this.todoservice.getTodoList()
     //.filter(todo => todo.type === 'project');
     //this.personalTodos = this.todoservice.getTodoList()
     //.filter(todo => todo.type === 'personal');
  }
 
  ngOnInit() {
  }

  additemToList(todoText:string,type:string)
  {
    console.log(todoText,type);
    this.todoService.addTodo(todoText,type);
  }

}
